const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const { threadId } = require("worker_threads");
// convert callback to promise
const readFileAsync = promisify(fs.readFile);
// base url of application
const baseURL = path.resolve(__dirname, "..");
//import fetch module
const fetch = require("node-fetch")
const getWords = async (req, res, next) => {
  let categoryCheck = [],
    words = [],
    result = [];

  const data = await readFileAsync(
    baseURL + "/json-data/TestData.json",
    "utf8"
  );
  //    parsing json data
  const parsedData = JSON.parse(data);
  //    shuffle the array
  const wordList = parsedData.wordList.sort((x, y) =>
    Math.random() > 0.5 ? 1 : -1
  );

  wordList.forEach((word) => {
    if (!categoryCheck[word.pos]) {
      result.push(word);
      categoryCheck[word.pos] = true;
    } else {
      words.push(word);
    }
  });
  // the number of returning data is constant but can be dynamic , by ust replace constant 10 with daynamic value
  result = [...result, ...words.slice(0, 10 - result.length)];

  res.json(result);
};

const getRank = async (req, res, next) => {
  let scoreListRank = {},
    result = 0;
  const { score } = req.body;
  const { scoresList } = JSON.parse(
    await readFileAsync(baseURL + "/json-data/TestData.json", "utf8")
  );
  //   scoresList.sort((x,y)=>x-y).forEach((score, index) => {
  //     scoreListRank[score] = index + 1;
  //   });
  scoresList.sort((x, y) => x - y);
  scoresList.find((Element, index) => {
    if (Element >= score) {
      return result=(100 * index + 1) / 30
    }
    result = Element;
  });
  res.json(result.toFixed(2));
};
const wordInfo=async(req,res)=>{
  const {word}=req.params
const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
const parsedData= await data.json()
res.status(200).json(parsedData)
}
module.exports = {
  getWords,
  getRank,
  wordInfo
};
