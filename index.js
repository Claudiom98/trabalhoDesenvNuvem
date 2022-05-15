const express = require("express");
const app = express();

app.listen(4000, function(erro){
    if(erro){
        console.log("Erro ao iniciar servidor...");
    } else {
        console.log("Servidor iniciado...");
    }
})