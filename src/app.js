require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const routeManager = require("./routes");


const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors("*"));

app.use("/api/v1", routeManager);

app.get("/", (request, response) => {
  response.json({
    info: "Node.js, Express, and Postgres API using AWS Lambda Application",
  });
});

module.exports = app;
