const mongoose = require("mongoose")

const highscoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Highscore",highscoreSchema)