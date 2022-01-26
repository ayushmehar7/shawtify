const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const cors = require("cors")
const shortenerRoutes = require("./routes/shortenerRoutes")

dotenv.config({
    path: "./config.env"
})
const app = express()

app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())

app.use("/api", shortenerRoutes)

if(process.env.NODE_ENV === 'production'){
    app.use("/", express.static("client/build"))
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "/client/build/index.html"))
    })
}

module.exports = app
