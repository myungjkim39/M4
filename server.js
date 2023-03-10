const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const server = express();
const quote = require("./quote");

env.config();
server.use(bodyParser.json());

// PORT
const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

// simple API
server.get("/quote", (req, res) => {
  res.send("this is quote API!");
});

// Quote API
let price;
server.get("/getQuote", (req, res) => {
  res.send(price);
});

server.post("/postQuote", (req, res) => {
  let carValue = req.body.carValue;
  let riskRating = req.body.riskRating;

  price = quote(carValue, riskRating);

  res.send(price);
});
