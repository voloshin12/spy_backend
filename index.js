const express = require("express")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 5000
const app = new express()

app.use(express.json())
app.use('/')

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://spy:sascha2512@cluster0.psqzg.mongodb.net/spy?retryWrites=true&w=majority")
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}
start()