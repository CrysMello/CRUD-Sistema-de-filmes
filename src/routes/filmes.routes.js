const express = require("express");
const router = express.Router();

const controller = require("../controllers/filmesController");

//Create/Criar -> Post
router.post("/", controller.criaFilme);

//Read/Ler -> Get
router.get("/", controller.listaFilmes);
//Update/atualizar -> Patch
router.patch("/", controller.atualizaFilme);

//Delete/deletar -> Delete
router.delete("/", controller.deletaFilme);

module.exports = router;
