require("dotenv").config()

const cors=require("cors");
const express = require("express")
const app = express()
const mongoose = require("mongoose")

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", error => console.error(error))
db.once("open", () => console.log("connected to database"))

app.use(express.json())

const highscoresRouter = require("./routes/highscores")
app.use("/highscores", highscoresRouter)


app.listen(3001, () => console.log("Server started"))