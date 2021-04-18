const express = require("express")
const mongoose = require("mongoose")
const location = require("./routes/location")

require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = new express()

app.use(express.json())
app.use('/', location)

const start = async () => {
    try {
        await mongoose.connect(process.env.BD_CONECT)
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}
start()