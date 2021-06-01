const express = require("express");
const app = express();

const banco = require("./src/data/database")

banco.connect()

app.use(express.json())

const filmsRouter = require("./src/routes/filmes.routes")
app.use("/filmes",filmsRouter)

app.listen(1984, ()=> console.log("Servidor rodando"))
