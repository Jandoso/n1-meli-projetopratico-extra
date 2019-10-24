const filmes = require('../models/filmes.json');

exports.get = (req, res) => {
    res.status(200).send(filmes);
};

exports.getFilmeById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(filmes.find(filme => filme.id == id));
};

exports.getFilmesByGenero = (req, res) => {
    const genero = req.params.nome;
    const filmesGenero = filmes.filter(filme => filme.genero.indexOf(genero) > -1);
    res.status(200).send(filmesGenero);
};

exports.getFilmesLongos = (req, res) => {
    const filmesLongos = filmes.filter(filme => filme.duracaoEmMinutos > 120)
    res.status(200).send(filmesLongos);
};

function transformarDataLancamentoEmDate(fim){
    const lancamentoSplitado = fim.split('/');
    const lancamento = new Date(lancamentoSplitado[2], lancamentoSplitado[1] - 1, lancamentoSplitado[0]);
    return lancamento;
};

exports.getLancamentos = (req, res) => {
    filmes.forEach(filme => filme.dataLancamento = transformarDataLancamentoEmDate(filme.dataLancamento));

    const dataAtual = new Date();
    const lancamentos = filmes.filter(filme => filme.dataLancamento > dataAtual);
    res.status(200).send(lancamentos);
};
