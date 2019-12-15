const express = require("express");
const queryController = require("../controllers/queryController");
const router = express.Router();

router.get("/query", queryController.processQuery, (req, res) => {
  res.status(200).json(res.locals.cache);
});

router.post("/cql", queryController.CQLprocessQuery, (req, res) => {
  res.status(200).json(res.locals.cache);
});

module.exports = router;
