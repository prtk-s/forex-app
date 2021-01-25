const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("../config");
const routes = require("../api");

module.exports = (app) => {

  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(`/${config.prefix}`, routes());
};
