const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");


const app = express();
dotenv.config();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.listen(process.env.PORT, () => {

  console.log(`server started at http://localhost:${process.env.PORT}`);
   

});
require("./config/database").connect();

app.get("/welcome", (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });
  

module.exports = app;