const mongoLoader = require("./mongo");
const expressLoader = require("./express");

module.exports = async (app) => {
  mongoLoader();
  console.log("MongoDB loaded");

  expressLoader(app);
  console.log("Express Loaded");
};
