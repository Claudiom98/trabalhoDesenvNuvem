const alert = require('alert');

function enviarFormulario(name, email){
    alert(`Usuário ${name} de email ${email} foi cadastro com sucesso!`);
}

module.exports = {
    enviarFormulario
}