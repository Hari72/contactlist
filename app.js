// import the needed modules

var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const route = require("./routes/route.js");

// connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/contactlist", { useMongoClient: true });

//on connection
mongoose.connection.on("connected", ()=> {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("Error", (err)=>{
  if(err) {
    console.log(("Error connecting to MongoDB"));
  }
});

// port number
const port = 3000;

// middleware - cors
app.use(cors());

// middleware - body-parser
app.use(bodyparser.json());

// adding routes
app.use(route);

// static files
app.use(express.static("./public"));

// test Server
app.get("/", (req,res) => {
  res.send("Hello");
});

app.listen(port,() => {
  console.log("Server started at port: " + port);
});
