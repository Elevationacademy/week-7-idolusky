const path = require('path')
const mongoose = require('mongoose')
const express = require('express')

const app = express()


const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/DB_NAME", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const thingSchema = new Schema({
    word: String
})
const Thing = mongoose.model('Thing', thingSchema)

app.get('/things', async (req, res) => {
    const things = await Thing.find({})
    res.send(things)
})

app.post('/things', async (req, res) => {
    const thing = new Thing(req.body)
    await thing.save()
    res.send(thing)
})
const port = 3000

app.listen(port, () => {
    console.log(`running on ${port}`);
})