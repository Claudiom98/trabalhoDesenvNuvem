const express = require("express");
const router = express.Router();

const calculadora = require("./calculadora");
const circulo = require("./circulo");

const functions = require("./src/js/functions");

router.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

router.get("/cadastro", function(req, res){
    res.sendFile(__dirname + "/src/pages/cadastro.html");
});

router.get("/simulador", function(req, res){
    res.sendFile(__dirname + "/src/pages/simulador.html");
});

router.get("/estacoes", function(req, res){
    res.sendFile(__dirname + "/src/pages/estacoes.html");
});

router.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/src/pages/sobre.html");
});

router.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/src/pages/sobre.html");
});

router.get("/avisoCadastro", function(req, res){
    let name = req.query.name;
    let email = req.query.email;
    functions.enviarFormulario(name, email);
})

router.get("/simulacao", function(req, res){
    let qtdDias = req.query.dias;
    let qtdAdultos = req.query.adultos;
    let qtdCriancas = req.query.criancas;
    let totalGeral = functions.calcularSimulacao(qtdDias, qtdAdultos, qtdCriancas);

    res.send(`O total da sua estadia será de R$ ${totalGeral}.`);
})


router.get("/verao", function(req, res){
    res.sendFile(__dirname + "/4seasons/summer.html");
});

router.get("/primavera", function(req, res){
    res.sendFile(__dirname + "/4seasons/spring.html");
});

router.get("/inverno", function(req, res){
    res.sendFile(__dirname + "/4seasons/winter.html");
});

router.get("/outono", function(req, res){
    res.sendFile(__dirname + "/4seasons/autumn.html");
});

router.get("/users", function(req, res){
    res.send("Lista todos os usuários")
});

router.get("/user", function(req, res){
    res.send("Inclui um usuário")
});

router.get("/user/:id", function(req, res){
    res.send(`Edita o usuário ${req.params.id}`)
})

router.get("/arearetangulo", function(req, res){
    let base = req.query.base;
    let altura = req.query.altura;
    res.send(`A área do retângulo é: ${base * altura}`)
})

router.get("/soma", function(req, res){
    let a = parseInt(req.query.oper1);
    let b = parseInt(req.query.oper2);
    res.send(`O resultado da soma é ${calculadora.soma(a, b)}`)
})

router.get("/subtracao", function(req, res){
    let a = parseInt(req.query.oper1);
    let b = parseInt(req.query.oper2);
    res.send(`O resultado da subtração é ${calculadora.subtracao(a, b)}`)
})

router.get("/mult", function(req, res){
    let a = parseInt(req.query.oper1);
    let b = parseInt(req.query.oper2);
    res.send(`O resultado da multiplicação é ${calculadora.mult(a, b)}`)
})

router.get("/div", function(req, res){
    let a = parseInt(req.query.oper1);
    let b = parseInt(req.query.oper2);
    res.send(`O resultado da divisão é ${calculadora.div(a, b)}`)
})

router.get("/circunferencia", function(req, res){
    let r = parseInt(req.query.raio);
    res.send(`A circunferência é ${circulo.circunferencia(r)}`)
})

router.get("/areacirculo", function(req, res){
    let r = parseInt(req.query.raio);
    res.send(`A area do circulo é ${circulo.area(r)}`)
})
module.exports = router;
