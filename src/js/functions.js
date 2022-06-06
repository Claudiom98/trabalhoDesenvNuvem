const alert = require('alert');

function enviarFormulario(name, email){
    alert(`Usuário ${name} de email ${email} foi cadastrado com sucesso!`);
}

function calcularSimulacao(qtdDias, qtdAdultos, qtdCriancas){
    const diaria = 300;
    const adicionalAdulto = 70;
    const adicionalCrianca = 50;

    let totalDiarias = qtdDias * diaria;
    let totalAdicionalAdulto = qtdAdultos * adicionalAdulto;
    let totalAdicionalCrianca = qtdCriancas * adicionalCrianca;

    let totalGeral = parseInt(totalDiarias) + parseInt(totalAdicionalAdulto) + parseInt(totalAdicionalCrianca);

    return totalGeral;
}

module.exports = {
    enviarFormulario,
    calcularSimulacao
}