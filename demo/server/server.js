const express = require("express");
const logger = require('morgan')
const bodyParser = require("body-parser");
const path = require("path");
const graphqlHTTP = require("express-graphql");
const graphql = require("graphql");

const schema = require("./schema");
// const cacheQL = require("./cacheql");
const cacheQL = require("../../cacheql")

const controller = require("./controller");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());

const cacheQLData = {
  redisHost: "redis-10212.c52.us-east-1-4.ec2.cloud.redislabs.com",
  redisPort: 10212,
  redisAuth: "eRQFVq70CXuDEoISTvKNVFtdevWabNbe",
  timeToLive: 30
};

cacheQL.set(cacheQLData);
cacheQL.auth();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/addPerson", controller.addPerson, (req, res) => {
  res.status(200).send("Added");
});

app.post(
  "/getPerson",
  cacheQL.checkify,
  controller.getPerson,
  cacheQL.cachify,
  (req, res) => {
    console.log("res locals cache: ", res.locals.cache);

    res.status(200).send(res.locals.cache);
  }
);

app.post("/getPersonDB", controller.getPersonDB, (req, res) => {
  console.log("res locals queryResponse: ", res.locals.queryResponse);
  res.status(200).send(res.locals.queryResponse);
});

app.use(express.static("public"));

app.use("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
