function verificarCriadores() {
    const nomeDoPrimeiroIntegrante = document.getElementById('nomeDoPrimeiroIntegrante_rgm').value;
    const nomeDoSegundoIntegrante = document.getElementById('nomeDoSegundoIntegrante_rgm').value;

    if (nomeDoPrimeiroIntegrante && nomeDoSegundoIntegrante) {
        document.getElementById('escrever').innerHTML = 'Nome dos criadores OK!';
    } else {
        document.getElementById('escrever').innerHTML = 'Por favor, insira o nome dos criadores.';
    }
}

function verificarSenha() {
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (senha !== confirmaSenha) {
        document.getElementById('escrever').innerHTML = 'As senhas não coincidem.';
        return;
    }

    const regexCaractereEspecial = /[_@#$%&*]/;
    const regexLetraMaiuscula = /[A-Z]/;
    const regexLetraMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;

    if (
        senha.length < 6 ||
        !regexCaractereEspecial.test(senha) ||
        !regexLetraMaiuscula.test(senha) ||
        !regexLetraMinuscula.test(senha) ||
        !regexNumero.test(senha) ||
        /(.)\1\1/.test(senha) ||
        /(123|234|345|456|567|678|789|987|876|765|654|543|432|321)/.test(senha)
    ) {
        document.getElementById('escrever').innerHTML = 'A senha não atende aos critérios.';
    } else {
        document.getElementById('escrever').innerHTML = 'Senha OK!';
    }
}
