const express = require('express')
const router = express.Router()

const filme = require('../models/filmes')

//Create/Criar -> Post
router.post('/', async (req, res)=>{
    //crie um novo livro
    const filme = new filme({
        titulo: req.body.titulo,
        genero: req.body.genero,
        duracao: req.body.duracao,
        criadoEm: req.body.criadoEm
    })
    //tentar mandar uma resposta e salvar no mongo
    try {
        const novoFilme = await filme.save() //que está salvando no banco de dados 
        res.status(201).json(novoFilme) // enviando resposta do servidor
    }catch (err){ // se nao conseguir criar, me diga qual foi o erro
        res.status(400).json({message: err.message})
    }
})

//Read/Ler -> Get
router.get('/', async (req, res)=> {
    const filmes = await filme.find() //listando todos livros que estao salvos no MongoDB
    res.status(200).json(filmes) //enviando resposta do servidor
})

//Update/atualizar -> Patch
router.patch('/', (req, res)=>{

})

//Delete/deletar -> Delete
router.delete('/', (req, res)=>{

})

module.exports = router