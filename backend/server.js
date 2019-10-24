const express = require('express');
const app = express();
const port = 8000;
const router = require('./routes');

// Rotas
app.use(router);

// Servidor
app.listen(port, (err) => {
    if(err){
        console.log('Ocorreu um erro ao iniciar o servidor');
    }else{
        console.log(`Servidor rodando na porta ${port}`);
    };
});