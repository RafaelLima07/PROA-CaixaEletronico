# Caixa Eletrônico

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/LICENSE)

# Sobre o projeto

https://rafaellima07.github.io/PROA-Caixa-Eletronico/

O professor Gabriel Augusto (https://github.com/gabaugusto), do Instituto Proa, criou um caixa eletrônico, utilizando JavaScript. Porém ele estava incompleto e precisava ganhar novas funcionalidades, e também medidas que impedem erros como, saldo negativo, sacar um valor negativo ou menor que o saldo. 

Minha tarefa era desenvolver uma nova versão desse caixa eletrônico, adicionando as novas funcionalidades. Nessa versão, ele ganhou funções para, transferir dinheiro para outras pessoas, mostrar extratos ficticios, usar uma senha para acessar os serviços de saldo, transferência, extrato e depósito. Ela também impede erros como saldo negativo, sacar mais dinheiro que o disponível na conta, depositar um valor igual à 0 ou tansferir um valor igual à 0.

## Boas vindas ao usuário
Nessa tela o usuário informa o seu nome e recebe uma mensagem de boas vindas.

![Boas Vindas](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Boas-Vindas.png)

## Serviços
Aqui ele pode utilizar os serviços disponíveis.

![Menu](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Menu.png)

## Ver saldo
O usuário consulta seu saldo. 

![Saldo](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Saldo-Atual.png)

## Senha
Sempre que o usuário for consultar extrato, fazer um saque, realizar um depósito ou transferência, ele dever informar a senha: 3589.

![Senha](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Senha.png)

Se a senha estiver correta o acesso é liberado.

![Senha-2](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Senha-2.png)

Se a senha estiver errada o acesso é impedido, mas, ele pode informar a senha novamente.

![Senha-3](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Senha-3.png)

## Extrato
Aqui ele consulta um extrato (ficticio)

![](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Extrato.png)

## Saque
O usuário informa o valor do saque. E recebe uma mensagem de confirmação.

![Saque](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Saque.png)

O valor informado é descontado do saldo atual.

![Saque-2](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Saque-2.png)

### Erro: Saque
Se o usuário informar caractéres inválidos.

![Erro](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Erro.png)

Se o usuário informa um valor maior que o saldo da conta.

![Erro-2](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Erro-2.png)

Se o usuário informar um valor menor ou igual a zero.

![Erro-3](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Erro-3.png)

## Depósito
O usuário informa o valor do depósito. E recebe uma mensagem de confirmação.

![Depósito](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Dep%C3%B3sito.png)

O valor recebido é somado ao saldo da conta.

![Depósito-2](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Dep%C3%B3sito-2.png)

### Erro: Depósito
Se o usuário informar caractéres inválidos.

![Erro](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Erro.png)

Se o usuário informar um valor menor ou igual a zero.

![Erro-3](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Erro-3.png)

## Transferência
Aqui o usuário deve informar os dados da pessoa que vai receber a transferência. Eses dados são: nome completo, CPF, nome do banco, agência, numero da conta, tipo da conta e o valor da transferência. Depois ele recebe uma mensagem de confirmação com os dados informados.

![Tranferência](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Transfer%C3%AAncia.png)

O valor da transferência é descontado do saldo da conta.

![Transferência-2](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Transfr%C3%AAncia-2.png)

### Erro: Transferência
Caso o usuário informar caractéres inválidos.

![Erro](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Erro.png)

Caso o usuário informa um valor maior que o disponível da conta.

![Erro-2](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Erro-2.png)

Caso o usuário informar um valor menor ou igual a zero.

![Erro-3](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Erro-3.png)

## Agradecimento
Após o usuário informar que quer sair do caixa, ele recebe uma mensagem de agradecimento.

![Agradecimento](https://github.com/RafaelLima07/PROA-Caixa-Eletronico/blob/main/assets/Agradecimento.png)

# Tecnologias utilizadas
JavaScript
HTML

### 09/2023
