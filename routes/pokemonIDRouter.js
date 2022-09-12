const express = require("express");
const pokemonController = require("./../controllers/pokemonController");

const router = express.Router();
router.route("/:id").get(pokemonController.getPokemonByID);
module.exports = router;
