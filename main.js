require("dotenv").config();
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const operation = require("./model/message.model.js")
const port = process.env.PORT || 3000
app.use(express.json())

// app.use(express.static(path.join(__dirname,"./public")))


app.post('/post', async (req, res) => {
    try {
        const product = await operation.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})


app.get('/post', async (req, res) => {
    try {
        const product = await operation.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})




app.listen(port, () => {
    mongoose.connect(
        process.env.MONGO_URL
    )
        .then(() => console.log('connected'))
        .catch(e => console.log(e));
})