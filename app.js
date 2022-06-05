const express = require("express");
const app = express();

var routers = require('./routers');
app.use('/', routers)

app.use(express.static(__dirname + '/src'));

app.listen(4000, function(erro){
    if(erro){
        console.log("Erro ao iniciar servidor...");
    } else {
        console.log("Servidor iniciado...");
    }
})