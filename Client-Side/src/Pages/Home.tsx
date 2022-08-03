// importing mui used components
import {  Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

// importing react built in or other functions  to implement.
import { useEffect, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

// importing my components to be used.
import WordContainer from "../Components/WordContainer";
import SpecialButton from "../Components/UI/SpecialButton";
import StyledButton from "../Components/UI/StyledButton";
import WrongAnswer from "../Components/UI/WrongAnswer";
import RightAnswer from "../Components/UI/RightAnswer";
import ExampleContainer from "../Components/UI/ExampleContainer";
import CircleProgressBar from "../Components/UI/CircleProgressBar";
import { RoutingContext } from "../Context/RoutingContext";



// importing interfaces to be used.
import { WordInterface } from "../Types/words";



const Home = () => {
  // using context 
  const { setTestHandler } = useContext(RoutingContext)


  // fetching Questions from the server
  useEffect(() => {
    Axios.get("http://localhost:4000/words")
      .then((data) => {
        setQuestions(data.data);})
      .catch((err) => {
        console.log(err);
      });
  }, []);





  // setting the useName state
  const [userName, setUserName] = useState("");

  // isChecked for checking if the user checked his answer or not.
  const [isChecked, setIsChecked] = useState(false);

  // score state for counting the accumalative score achieved.
  const [score, setScore] = useState(0);

  // it's the array of question's state.
  const [questions, setQuestions] = useState<WordInterface[]>([]);

  // word counter used for indexing and showing the upcoming word.
  const [WordsCounter, setWordsCounter] = useState(0);

  // percentage state.
  const [percent, setPercent] = useState(0);

  // used for showing the chosen answer.
  const [Answer, setAnswer] = useState("");

  // useed for interact with answer.
  const [bgColor, SetbgColor] = useState(true);

  // used for preventing answering the question twice.
  const [Answered, setIsAnswered] = useState(false);

  // determine wheter the annswer is right or not 
  const [correctAnswer , setCorrectAnswer] = useState(false);

  // // to hide Example container in the last sentence
  // const [hideExample , setHideExample ] = useState(false);

  // to make a sentence state
  const [sentence , setSentence] = useState('');


  // answers buttons data
  const Chocies = [
    { title: "noun", id: "1" },
    { title: "adjective", id: "2" },
    { title: "verb", id: "3" },
    { title: "adverb", id: "4" },
  ];

  // creating error state
  const [ErrorMessage, setErrorMessage] = useState("");
  const Navigate = useNavigate();

  // fn used to set the student answer
  const SetAnswerHandler = (ans: string) => {
    setAnswer(ans);
  };

  useEffect(() => {
    if(WordsCounter  === 10) { 
      setSentence('') 
    return
  }
    getWordData(questions[WordsCounter]?.word)

  } , [WordsCounter])


  const getWordData = (word: string) => {
    if(word === '') return
    Axios.get(`https://www.dictionaryapi.com/api/v3/references/sd3/json/${word}?key=669e7fe5-6db7-4b11-983d-2cc52a33f92b`)
      .then((res) => setSentence(res.data[0].shortdef[1]))
      .catch((Error) => console.log(Error.message));
  };


  useEffect(() => {
    // reset the error message and other state every question.
    setIsChecked(false);
    setErrorMessage("");

    // getting the user name
    const username = localStorage.getItem("username")
      ? JSON.parse(localStorage.getItem("username") || "")
      : "";
    setUserName(username);
  }, [WordsCounter]);




  const CheckAnswerHandler = () => {
    if (Answered) {
      setErrorMessage("You can't Answer the question twice ");
      return;
    }

    if (Answer === "" && WordsCounter !== 10) {
      setErrorMessage("You should choose an answer");
    }else {
      setErrorMessage('')
    }

    if (Answer === questions[WordsCounter].pos) {
      setScore((previousState) => (previousState += 10));
      SetbgColor(false);
      setIsChecked(true);
      setIsAnswered(true);
      setCorrectAnswer(true);
    }

    if (Answer !== questions[WordsCounter].pos && Answer !== "") {
      SetbgColor(false);
      setIsChecked(true);
      setIsAnswered(true);
      setCorrectAnswer(false);
    }
  };

  useCallback(() => {
    ChangePercentHandler();
    getNextQuestion();
  }, [WordsCounter]);

  const ChangePercentHandler = () => {
    // here I'm calculating the percentage by dividing the total number of questions over the answered questions.
    const TotalNumberOFQuestions = questions.length;
    setPercent(Math.round(((WordsCounter + 1) / TotalNumberOFQuestions) * 100));
    return percent;
  };

  const getResult = () => {
    // storing the result in localStorage to be used in result page.
    setTestHandler()
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("status", "finished");
    Navigate("/result");
  };

  const getNextQuestion = () => {
    // getting the upcoming questions by changing the counter.
    SetbgColor(true);
    setWordsCounter((counter) => (counter += 1));
    setIsAnswered(false);
    ChangePercentHandler();
    setAnswer("");
  };

  return (
    <Box
      sx={{
        padding: { xl: "2rem", lg: "2rem", md: "2rem", sm: "2rem", xs: "2rem" },
        color: "#263238",
        minHeight: "100vh",
        // backgroundColor: `rgba(37, 40, 48, 0.9)`,
      }}
    >
      <Stack
        justifyContent="space-around"
        alignItems="center"
        gap={5}
        sx={{ height: "100%" }}
      >

        {userName && <Typography textAlign='center' sx={{color:'#30CFD0' , fontSize:{ xl:'2rem' , lg:'2rem' , md:'2rem' , sm:'2rem' , xs:'1.5rem'}}}>Good Luck, {userName}</Typography>}

        <Stack flexWrap='wrap' flexDirection='row' justifyContent='space-around' alignItems='center' sx={{width:'100%' , gap:{xs:'2rem' , sm:'2rem'} }} >
        <WordContainer bgc="#3b4754" word={questions[WordsCounter] ? questions[WordsCounter].word : ''} counter={WordsCounter}>
          {questions[WordsCounter]
            ? questions[WordsCounter].word
            : "we're done"}
        </WordContainer>
         { !(WordsCounter === 10) && <CircleProgressBar percent={percent}/>}
        { sentence &&<ExampleContainer bgc="#3b4754"  Example={sentence.length > 5 ? sentence : 'No Example'} ></ExampleContainer>}
        </Stack>

        {WordsCounter < 10 && (
          <Grid container gap={1} justifyContent="center" alignItems="center" >
            {/* showing  answers buttons */}
            {Chocies.map((choice) => {
              return (
                <Grid
                  key={choice.id}
                  item
                  lg={4}
                  md={4}
                  sm={4}
                  xs={12}
                  sx={{ display:'flex' , justifyContent:'center'}}
                  onClick={() => {
                    SetAnswerHandler.call(this, choice.title);
                  }}
                >
                  
                  <StyledButton key={choice.id}  bgColor={ Answer === choice.title && bgColor
                          ? "#9c27b0"
                          : bgColor
                          ? ""
                          : questions[WordsCounter]?.pos === choice.title
                          ? "green"
                          : "#EB1D36"}>{choice.title}</StyledButton>

                </Grid>
              );
            })}
          </Grid>
        )}

          {correctAnswer && isChecked && <RightAnswer />}
          {!correctAnswer && isChecked && <WrongAnswer />}

        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          gap={3}
        >
          {WordsCounter < 10 && (
            <SpecialButton bgcolor="white" action={CheckAnswerHandler}>
              Check Answer
            </SpecialButton>
          )}
          {isChecked && (
            <SpecialButton bgcolor="white" action={getNextQuestion}>
              Next
            </SpecialButton>
          )}
          {WordsCounter >= 10 && (
            <SpecialButton bgcolor="white" action={getResult}>
              Show Rank
            </SpecialButton>
          )}
        </Stack>

        {ErrorMessage && (
          <Typography sx={{ fontWeight: "900px", color: "white" }}>
            {ErrorMessage}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default Home;
