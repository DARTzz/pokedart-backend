const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: [true, "Pokemon must have an ID!"],
            unique: true,
        },
        name: {
            type: String,
            required: [true, "Pokemon must have a Name"],
            unique: true,
        },
        alias: {
            type: String,
            required: [true, "Pokemon must have an alias"],
            unique: true,
        },
        type: {
            type: String,
            required: [true, "Pokemon must have a type"],
            unique: true,
        },
        description: {
            type: String,
            required: [true, "Pokemon must have a Description"],
            unique: true,
        },
        image: {
            type: String,
            required: [true, "Pokemon must have an Image"],
            unique: true,
        },
        weakness: {
            type: String,
            required: [true, "Pokemon must have a Weakness"],
            unique: true,
        },
        hp: {
            type: Number,
            required: [true, "Pokemon must have hp!"],
            unique: true,
        },
        moves: {
            type: Array,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
