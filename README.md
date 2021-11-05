# Bem vindo ao desafio técnico Ebytr! :ballot_box_with_check:

## O que foi desenvolvido

Uma aplicação capaz de axiliar as pessoas  a se organizar e ter mais produtividade através de cards de tarefas editáveis. Estes cards possuem a pessoa respnsável pela tarefa e o status da tarefa (pendente, em andamento ou finalizada).


## Sobre a aplicação

A aplicação foi desenvolvida com React, NodeJs e MongoDB integrado à uma arquitetura MSC.

A aplicação possui as seguintes funcionalidades:


1. Visualizar a lista de tarefas;
2. Inserir uma nova tarefa na lista;
3. Remover uma tarefa da lista;
4. Atualizar uma tarefa da lista;
5. A tarefa deve possuir um status editável: pendente, em andamento ou finalizada;


## Intruções para rodar o projeto localmente

1. Clone o repositório
  * `git clone git@github.com:leandrofcr/ebytr-challenge`.

  * Entre no repositório que você acabou de clonar:
    * `cd digital-republic-challenge`


2. Instale as dependências e inicialize o projeto. Para isso, abra uma instância do terminal dentro do diretório backend e outra instância dentro da diretório front end.
  * No diretório *backend*, instale as dependências:
    * `yarn`
    * ou `npm install`
  * Inicialize o servidor (uma mensagem dizendo que o servidor está rodando na porta 3000 deve ser exibida no console):
    * `yarn dev`
    * ou `npm run dev`


* No diretório *frontend*, instale as dependências:
    * `yarn`
    * ou `npm install`
 * Inicialize a aplicação (uma janela com a aplicação deve abrir no seu navegador):
    * `yarn start`
    * ou `npm start`



## Pontos de melhoria

- Criação de testes unitários e/ou integração para o frond-end e back-end.
- Criação de um filtro para ordenação dos *cards* por ordem alfabética, data de criação, status ou responsável.
- Configuração do [socket.io](https://socket.io/) para que os *cards* sejam inseridos/removidos em tempo real ao realizar uma operação no banco de dados.
- Criar tela de login e tela de criação de usuário no front-end para que somente usuários cadastrados e logados possam visualizar e editar alguma tarefa.
