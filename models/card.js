const mongoose = require("mongoose"); //importa Mongoose.

const cardSchema = new mongoose.Schema({});

module.exports = mongoose.model("Card", cardSchema);
