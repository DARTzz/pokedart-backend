const express = require("express");
const pokemonController = require("./../controllers/pokemonController");

const router = express.Router();
router.route("/:name").get(pokemonController.getPokemonByName);
module.exports = router;
