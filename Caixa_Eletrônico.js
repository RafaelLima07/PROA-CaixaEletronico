var nome = prompt("Seja bem vindo usuário. Qual é o seu nome? ")
var saldo = 100.5;

alert("Olá, " + nome + " é um prazer ter você por aqui!!")

function inicio() {
    var escolha = parseInt(prompt("Selecione uma opção \n 1-Saldo \n 2-Extrato \n 3-Saque \n 4-Depósito \n 5-Transferência \n 6-Sair"));

    switch (escolha) {
        case 1:
            ver_saldo();
            break;

        case 2:
            ver_extrato();
            break;

        case 3:
            fazer_saque();
            break;

        case 4:
            fazer_deposito();
            break;

        case 5:
            fazer_transferencia();
            break;

        case 6:
            sair();
            break;
    }
}

function ver_saldo() {
    alert("Seu saldo atual é: " + saldo);
    inicio();
}

function ver_extrato() {
    senha();

    alert("\n 10/9: Super Mercado, R$53,90 \n 08/9: Loja de sapatos, R$223,99 \n 03/9: Loja de roupas, R$89,00 \n 25/8: Restaurante, R$398,95 \n 25/8: Super Mercado, R$450,30 \n 13/8: Depósito de: R$130,00 ");

    inicio();
}

function fazer_saque() {
    senha();

    var saque = parseFloat(prompt("Qual o valor para saque?"));

    if (isNaN(saque) || saque === " ") {
        alert("Caractéres inválidos. Por favor, informe um número.");
        fazer_saque();
    } else if (saque > saldo) {
        alert("Operação não realizada. Saldo insuficiente");
        fazer_saque();
    } else if (saque <= 0) {
        alert("Operação não realizada. Valor inválido");
        fazer_saque();
    } else {
        saldo -= saque;
        alert("Saque realizado com sucesso no valor de: R$" + saque)
        ver_saldo();
    }
    inicio();
}

function fazer_deposito() {
    senha();

    var deposito = parseFloat(prompt("Qual o valor para depósito?"));

    if (isNaN(deposito) || deposito === " ") {
        alert("Por favor, informe um número.");
        fazer_deposito();
    } else if (deposito <= 0) {
        alert("Operação não realizada. Valor inválido");
        fazer_deposito();
    } else {
        saldo += deposito;
        alert("Depósito realizado com sucesso no valor de: R$" + deposito);
        ver_saldo();
    }
    inicio();
}

function fazer_transferencia() {
    senha();

    var nome_ = prompt("Informe o nome completo: ");
    var cpf = parseInt(prompt("Informe o CPF ou CPNJ: "));
    var nome_banco = prompt("Informe o nome do banco: ");
    var agencia = parseInt(prompt("Informe o número da agência: "));
    var num_conta = parseInt(prompt("Informe o número da conta: "));
    var tipo_conta = prompt("Informe o tipo da conta: ");
    var valor_transferencia = parseFloat(prompt("Informe o valor que deseja transferir "));

    if (valor_transferencia > saldo) {
        alert("Operação não realizada. Saldo insuficiente");
        realizar_transferencia();
    } else if (isNaN(valor_transferencia) || valor_transferencia === " ") {
        alert("Caractéres inválidos. Por favor, informe um número.");
        realizar_transferencia();
    } else if (valor_transferencia <= 0) {
        alert("Operação não realizada. Valor inválido");
        realizar_transferencia();
    } else {
        saldo -= valor_transferencia;
        alert("\n Tansferência feita com sucesso para: " + nome_ + "\n Banco : " + nome_banco + "\n Conta: " + num_conta + "\n No valor de: R$" + valor_transferencia);
        ver_saldo();
    }

    inicio();
}

function senha() {
    var senha_acesso = parseInt(prompt("Informe sua senha: "));

    if (senha_acesso === 3589) {
        alert("Senha correta. Acesso liberado");
    } else {
        alert("Senha incorreta");
        senha();
    }
}

function erro() {
    alert("Por favor, informe um número entre 1 e 6.");
    inicio();
}

function sair() {
    var confirma = confirm("Você deseja sair?");
    alert("Agradecemos por usar os serviços do caixa eletrônico. " + nome + "foi uma prazer ter você por aqui!!")

    if (confirma === true) {
        window.close();
    } else {
        inicio();
    }
}

inicio();