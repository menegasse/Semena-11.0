//DEPENDENCIAS
const express = require('express');

const routes = express.Router(); //cria um objeto para manipular as rotas
/**
 * Rota /Recurso
 */


/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do servidor
 * POST: Criar uma informação no servidor 
 * PUT: Alterar uma informação no servidor 
 * DELETE: Deleta uma informação no servidor 
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota enviados na rota após "?" (Filtros,paginação)
  * Route Params: Parâmentros utilizados para indentificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */


//CONTROLLER

const OngsControlle = require('./controllers/OngsController');

const IncidentsControlle = require('./controllers/IncidentsController');

const ProfileControlle = require('./controllers/ProfileController');

const SessionControlle = require('./controllers/SessionController');

//ROTAS

routes.get('/ongs',OngsControlle.index);

routes.post('/ongs', OngsControlle.create);

routes.get('/incidents',IncidentsControlle.index);

routes.post('/incidents',IncidentsControlle.create);

routes.delete('/incidents/:id',IncidentsControlle.delete);

routes.get('/profile',ProfileControlle.index);

routes.post('/session',SessionControlle.create);

module.exports = routes;