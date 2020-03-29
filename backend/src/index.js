const express = require('express'); // importa a biblioteca express para gerenciar as rotas

const cors = require('cors');

const routes = require('./routes');

const app = express(); 

app.use(express.json()); //configura o objeto de rotas para reconhecer e manipular obejtos JSON (transforma JSON em Object JS)

app.use(cors()); // configura o modulo de segurança para definir os acessos a aplicação

app.use(routes); // configura as rotas de acesso da aplicação

app.listen(3333); //indica a porta de conexão de acesso as rotas 