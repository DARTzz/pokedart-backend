const Pokemon = require("./../models/pokemonModel.js");

exports.getPokemonByID = async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ id: req.params.id });
        if (pokemon == null) {
            res.status(404).json({
                status: "fail",
                message:
                    "Could not find the Pokemon with the passed ID. Make sure the ID is correct !",
            });
        }
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
        const pokemon = await Pokemon.findOne({
            name:
                req.params.name[0].capitalize() + req.params.name.substring(1),
        });
        if (pokemon == null) {
            res.status(404).json({
                status: "fail",
                message:
                    "Could not find the Pokemon with the passed Name. Make sure the name is correct !",
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                pokemon: { ...pokemon },
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message:
                "Could not find the Pokemon with the passed Name. Make sure the name is correct !",
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
