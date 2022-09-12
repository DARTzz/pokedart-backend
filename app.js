const express = require("express");
const morgan = require("morgan");

const pokemonIDRouter = require("./routes/pokemonIDRouter");
const pokemonNameRouter = require("./routes/pokemonNameRouter");
const pokemonAllRouter = require("./routes/pokemonAllRouter");

const app = express();

app.use(morgan("dev")); // middleware for error logging

app.use(express.json()); // this middleware adds request.body attribute :)

// adding the pokemon routers

app.use("/api/pokemons/id", pokemonIDRouter);
app.use("/api/pokemons/name", pokemonNameRouter);
app.use("/api/pokemons/all", pokemonAllRouter);

app.all("*", (req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: `Can't find ${req.originalUrl} on this server! Please check the documentation for how to access this API.`,
    });
});
module.exports = app;
