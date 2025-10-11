const express = require("express");
const router = express.Router();

const {
  getCards,
  createNewcard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require("../controllers/cards.js");

const Card = require("../models/card.js");

router.get("/", getCards);

router.post("/", createNewcard);

router.delete("/:cardId", deleteCard);

router.put("/:cardId/likes", likeCard);

router.delete("/:cardId/likes", dislikeCard);

/*const path = require("path");
const fs = require("fs");

const rutaCards = path.join(__dirname, "data", "cards.json");

fs.readFile(rutaCards, "utf8", (err, data) => {
  if (err) {
    //console.error('Error al leer el archivo:', err);
    return;
  }
  try {
    const cards = JSON.parse(data);
    console.log(cards);
  } catch (parseErr) {
    console.error("Error al parsear JSON:", parseErr);
  }
});*/
module.exports = router;
