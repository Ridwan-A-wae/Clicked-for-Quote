const express = require("express");
const cors = require("cors");
const Quote = require("inspirational-quotes");

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/", (req, res) => {
  res.send(Quote.getQuote());
});

app.listen(5000, () => {
  console.log("Server started!");
});
