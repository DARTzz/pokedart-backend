const express = require("express");
const pokemonController = require("./../controllers/pokemonController");

const router = express.Router();
router.route("/").get(pokemonController.getAllPokemon);
module.exports = router;
