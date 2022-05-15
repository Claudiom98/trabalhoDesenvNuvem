const express = require("express");
const app = express();

var routers = require('./routers');
app.use('/', routers)

app.listen(4000, function(erro){
    if(erro){
        console.log("Erro ao iniciar servidor...");
    } else {
        console.log("Servidor iniciado...");
    }
})