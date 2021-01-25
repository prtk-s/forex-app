const express = require("express");
const config = require("./config");

const loader = require("./loaders");

const startServer = () => {
  const app = express();
  loader(app);

  app
    .listen(config.app.port, () => {
      console.log(`
      ################################################
      🛡️  Server listening on port: ${config.app.port} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      console.error(err);
      process.exit(1);
    });
};

startServer();

