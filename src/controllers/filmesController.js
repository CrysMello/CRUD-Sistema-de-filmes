const filme = require("../models/filmes");


const criaFilme = async (req, res) => {
  //crie um novo livro
  const filme = new filme({
    titulo: req.body.titulo,
    genero: req.body.genero,
    duracao: req.body.duracao,
    criadoEm: req.body.criadoEm,
  });
  //tentar mandar uma resposta e salvar no mongo
  try {
    const novoFilme = await filme.save(); //que está salvando no banco de dados
    res.status(201).json(novoFilme); // enviando resposta do servidor
  } catch (err) {
    // se nao conseguir criar, me diga qual foi o erro
    res.status(400).json({ message: err.message });
  }
};

const listaFilmes = async (req, res) => {
  const filmes = await filme.find(); //listando todos livros que estao salvos no MongoDB
  res.status(200).json(filmes); //enviando resposta do servidor
};

const atualizaFilme = async (req, res) => {
  try {
    const filme = await filme.findById(req.params.id);
    if (filme == null) {
      return res.status(404).json({ message: "Filme não localizado" });
    }

    if (req.body.titulo != null) {
      filme.titulo = req.body.titulo;
    }

    if (req.body.duracao != null) {
      livro.duracao = req.body.duracao;
    }

    if (req.body.descricao != null) {
      livro.descricao = req.body.descricao;
    }

    if (req.body.genero != null) {
      filme.genero = req.body.genero;
    }
    if (req.body.ano != null) {
      filme.ano = req.body.ano;
    }
    if (req.body.criadoEm != null) {
      livro.criadoEm = req.body.criadoEm;
    }

    const filmeAtualizado = await filme.save();
    res.json(filmeAtualizado);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletaFilme = async (req, res) => {
  try {
    const filme = await filme.findById(req.params.id);
    if (filme == null) {
      return res.status(404).json({ message: "Filme não localizado!" });
    }

    await filme.remove();
    res.json({ message: "Filme deletado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  criaFilme,
  listaFilmes,
  atualizaFilme,
  deletaFilme,
};
