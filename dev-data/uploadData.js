const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Pokemons = require("./../models/pokemonModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateindex: true,
        useFinadAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection sucessful!"));

const pokemons = JSON.parse(
    fs.readFileSync(`${__dirname}/pokemonsData.json`, "utf-8")
);

const importData = async () => {
    try {
        await Pokemons.create(pokemons);
        console.log("data loaded sucessfully !!");
    } catch (err) {
        console.log(err);
    }
    process.exit();
};
const deleteData = async () => {
    try {
        await Pokemons.deleteMany();
        console.log("Data successfully deleted!");
    } catch (err) {
        console.log(err);
    }
    process.exit();
};
importData();
