const cors = require('cors');
const express = require('express'); 
require("dotenv").config()


const app = express(); 
const port = process.env.PORT || 5000; 

app.use(cors());

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const recordSchema = mongoose.Schema({
    name: {type: String, required: true, default: "Anonymous"},
    time: Number,
    date: Date,
  })

let Record = mongoose.model("Record", recordSchema);

// var bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({extended: false}))

app.use(/^\/\w*/, (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
  })

app.get("/", (req, res) => {
    res.send({ message: "Hello from server!" });
  });

app.route("/api?/:name?/:date?/:time?").get((req, res) => {
    const {name, date} = req.query
    if (!req.query.name) {
        const data = Record.find({}, (err,data) => {
            res.json(data)
        })
    // console.log(data)
}
    else {
    let doc = Record.find({name: name, date: date}, {sort: {name:1}} , (err,data) => {
        if (err || !data) {
          res.status(404).json({error: err})
          return false
        }
        res.json(data)
})}
}).post((req,res) => {
    console.log(req.query)
    const rec = new Record({name: req.query.name, time: req.query.time, date: req.query.date});
    rec.save((err, record) => {
        if (err) return console.error(err)
        res.json({status: "success", record: record})
    })
    // console.log(req)
})

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`))