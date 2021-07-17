const express = require('express'); 
require("dotenv").config()
const app = express(); 
const port = process.env.PORT || 5000; 

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const recordSchema = mongoose.Schema({
    name: {type: String, required: true, default: "Anonymous"},
    time: Number,
    date: Date,
  })

  let Record = mongoose.model("Record", recordSchema);

var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))

app.use(/^\/\w*/, (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
  })

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

app.route("/api/:name?/:date?/:time?").get((req, res) => {
    let doc = Record.find({name: req.params.name, date: req.params.date} , (err,data) => {
        if (err || !data) {
          res.status(404).json({error: err})
          return false
        }
        let result = data.url
        console.log("Error")
})}).post((req,res) => {
    const rec = new Record({name: req.params.name, time: req.params.time, date: req.params.date});
    rec.save((err, record) => {
        if (err) return console.error(err)
        res.json({status: "success"})
    })
    console.log(req)
})

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`))