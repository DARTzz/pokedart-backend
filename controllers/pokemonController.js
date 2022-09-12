const Pokemon = require("./../models/pokemonModel.js");

exports.getPokemonByID = async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ id: req.params.id });
        res.status(200).json({
            status: "success",
            data: {
                pokemon,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message:
                "Could not find the Pokemon with the passed id. Make sure the id is correct !",
        });
    }
};
exports.getPokemonByName = async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ name: req.params.name });
        res.status(200).json({
            status: "success",
            data: {
                pokemon,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message:
                "Could not find the Pokemon with the passed id. Make sure the id is correct !",
        });
    }
};
exports.getAllPokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.find();
        res.status(200).json({
            status: "success",
            data: {
                pokemon,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message:
                "Could not find the Pokemon with passed parameters. Please reference the documentation !",
        });
    }
};
