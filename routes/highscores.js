const express = require("express")
const router = express.Router()
const Highscore = require("../models/highscore")

router.get("/getHighscores", async (req,res) => {
    try {
        const highscores = await Highscore.find()
        .sort("-score")    
        .limit(15)
        
        res.json(highscores)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post("/addHighscore", async (req,res) => {
    const highscore = new Highscore({
        name:req.body.name,
        score:req.body.score
    })
    try {
        const newHighscore = await highscore.save()
        res.status(201).json(newHighscore)
    } catch (error) {
        res.status(400).json({message:error.message})    
    }
})

module.exports = router