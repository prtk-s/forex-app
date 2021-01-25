const mongoose = require("mongoose");

const { Schema } = mongoose;

const Currency = new Schema(
  {
    name: String,
    code: String,
  },
  { collection: "currency" }
);

module.exports = mongoose.model("currency", Currency);
