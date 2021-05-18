# 💻 Teste Dev 

## Problema

O usuário entra no robô, escreve “Cotação de Tarifas”, nesse momento o robô precisa buscar os preços de quartos para um período específico.

## Descrição do Projeto

Foi criado um Robô Crawler que faz a busca de preços de um hotel em tempo real.
A construção do robô foi feita usando como base o hotel lecanton (https://lecanton.com.br/).
Para execução do robô e consumo dos dados foi criada uma API.

Url: /buscar

Method: POST

Dados de Entrada Json:
```bash
{
  "checkin": "25/05/2021",
  "checkout": "26/05/2021"
}
```
A API irá retornar as seguintes informações:

```bash
{
  "nome": "",
  "descricao": "",
  "preco": "",
  "imagens": []
},
```

## Insomnia's screenshoot

![image](https://user-images.githubusercontent.com/20840068/117484764-eb458600-af3d-11eb-8fad-f1df2e66a253.png)

## Pré-requisitos
Você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

## Principais Tecnologias Usadas

Para realizar o Web scraping foi utilizado a biblioteca node Puppeter. 
Como apoio foi usada a biblioteca Cheerio no qual permite a implementação de jQuery para Node.
E para construção da API foi utilizado o Express.



## Rodando o Projeto

```bash
# Clone este repositório
$ git clone <https://github.com/jonathanprosso/teste-dev.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd projeto

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Execute a aplicação em produção
$ npm start

```

## Features

- [x] Robo extração de dados
- [x] API para consumo dos dados
