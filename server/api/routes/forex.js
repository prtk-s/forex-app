const express = require("express");
const forex = require("../../controllers/forex");

const route = express.Router();

module.exports = (app) => {

  app.use("/", route);

  route.get("/list", forex.getCurrencyList);
  route.get("/rate/:base", forex.getCurrencyRate);
};
