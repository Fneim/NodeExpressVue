const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const controller = require("./controller.js");
// mongoose leveraging built in JS ES6 promises
mongoose.Promise = Promise;

const PORT = process.env.port || 8080;
const app = express();
app.use(bodyParser.urlencoded({extended: false}));

// public a static dir
app.use(express.static("public"));
app.use(controller);

mongoose.connect("mongodb://localhost/VueAuthUsers");
const db = mongoose.connection;

db.on("err", (err) => {
  console.log("Mongoose Err: ", err);
})

db.once("open", () => {
  console.log("Mongoose connection successful");
})


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});



app.listen(PORT, () => console.log(`Listening on ${PORT}`));
