const express= require("express")
const router = express.Router()
const {getWords,getRank,wordInfo} = require("../controllers/gameController")
router.get("/words",getWords)
router.post("/rank",getRank)
router.get("/word-info/:word",wordInfo)

module.exports=router