const express = require('express');
const app = express();
const router = express.Router();

const filmesController = require('./controllers/filmesController');

router.get('/filmes', filmesController.get);
router.get('/filmes/longos', filmesController.getFilmesLongos);
router.get('/filmes/lancamentos', filmesController.getLancamentos)
router.get('/filmes/:id', filmesController.getFilmeById);
router.get('/filmes/genero/:nome', filmesController.getFilmesByGenero);

module.exports = router;