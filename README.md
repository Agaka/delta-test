# Getting Start

## Como instalar

Faça um fork do projeto em sua máquina. Abra as pastas "front" e "back" no cmd. Na pasta front execute o comando "npm start" e aguarde um instante, enquanto o 
projeto abre em [http://localhost:3000](http://localhost:3000).

No back execute o comando "nodemon index.js", a API está sendo ouvida na porta 3333, no endereço [http://localhost:3333](http://localhost:3333).

### Banco de Dados

Foi usado MySQL para guardar os dados do projeto. Junto ao projeto tem o arquivo BD.sql que contém o código sql para criar um banco de dados e a tabela que está
configurada no projeto. Basta executar em um SGBD o código sql.

### Back-End

Foi criada uma API com NodeJs Express para as requisições HTTP e Knex como Query Builder para o projeto. Em index.js é feito as configurações de API, chamando as rotas, 
configurando portas e headers. Em "routes" são estipuladas as rotas para um CRUD, cada rota chama uma função criada dentro de um controlador, que controla as ações e 
que usa a camada de modelo para gerenciar o comportamento dos dados recebidos pelo front. Também foi usado um middleware chamado Multer para receber e gerenciar o upload 
imagens nas rotas de criação e edição.

### Front-End

Na parte visual foi usada a biblioteca React para criação de uma SPA (Single Page Application) que consumiu a API anterior. Foi criado um pequeno sistema que fazia um
CRUD para uma tabela de alunos. A aplicação é um gerenciamento de alunos, onde o usuário pode cadastrar, visualizar, editar e excluir os alunos. Também é possível inserir
uma imagem para identificar cada aluno.

Foi usado componentes próprios, biblioteca de estilo e de rotas para a criação da aplicação.
