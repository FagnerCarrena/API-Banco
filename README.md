# API Transações Bancárias
---
##   👌Sobre
O projeto consiste na criação de uma **API RESTful** com funcionalidades básicas que simulam  transações bancarias. Contendo as seguintes funcionalidades: criação de conta, listagem das contas cadastradas, atualização de dados dos usuários, exclusão de dados dos usuários, depósito em conta, saque bancário, tranferência de valores entre contas, consulta de saldos, emissão de extrato bancário

###  ✔Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
---
###    🐱‍🏍Como baixar o projeto
```bash
#Clonar o repositório
$ git clone https://github.com/fagnercarrena

# instalar as dependencias
$ npm install

#Iniciar o projeto
$npm run dev

```
---
###     🕵️‍♀️Features

---
**Criaçao da Conta Bancária**
```bash
POST /contas
Esse endpoint cria a conta bancária
```
**Listagem das Contas Cadastradas**
```bash
GET /contas
Esse endpoint lista as contas bancárias
```
**Atualizaçao cadastral**
```bash
PUT /contas/:numeroConta/usuario
Esse endpoint faz a atualizaçao dos dados cadastrados solicitados
```
**Exclusão da Conta**
```bash
 DELETE /contas/:numeroConta
Esse Endpoint Deleta a Conta Solicitada 
```
**Consulta de Saldo**
```bash
GET /contas/saldo
Esse endpoint mostra o saldo da conta
```

**Extrato da Conta**
```bash
GET/contas/extrato
Esse endpoint traz todos os lançamentos da conta
```
**Depósito na conta bancária**
```bash
POST /transacoes/depositos
Esse endpoint permite fazer depósitos em conta
```
**Saque**
```bash
POST /transacoes/sacar
Esse endpoint permite realizar saques na conta
```
**Transferir**
```bash
POST /transacoes/transferir
Esse endpoint permite realizar transferências na conta
```


###   🦾Skills

Node.js, API, JavaScript



---
Desenvolvido por Fagner Carrena







