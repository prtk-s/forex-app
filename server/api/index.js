const { Router } = require("express");
const forex = require("./routes/forex");

module.exports = () => {
  const app = Router();
  forex(app);

  return app;
};
