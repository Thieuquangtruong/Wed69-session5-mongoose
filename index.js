const express = require("express")
const app = express()
const PORT = 8888
const router = require('./router/index')
const morgan = require("morgan")
const cors = require('cors')
const dotenv = require("dotenv")
const connectToDB = require("./database")

dotenv.config()
app.use(morgan("combined"))
app.use(express.json()) // middleware
app.use(cors({
    origin: "*"
}))

connectToDB()
app.use(router)

app.listen(PORT, () => {
    console.log("Sever is listening on http://localhost:" + PORT)
})