const express = require("express");
const app = express();

var routers = require('./routers');
app.use('/', routers)

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/src'));

app.listen(port, function(erro){
    if(erro){
        console.log("Erro ao iniciar servidor...");
    } else {
        console.log("Servidor iniciado...");
    }
})
