#1º Node Js

 - Description: biblioteca utilizada para o desenvolvimento da aplicação;
 - comand install: npm install nodejs-lts -y

#2º Express

 - Description: biblioteca utilizada para o gerenciamento de rotas na aplicação; 
 - comand install: npm install express

#3º Nodemon

 - Description: biblioteca utilizada para o autalizar em tempo real o servidor mediante as alterações feitas na aplicação durante o desenvolvimento;  
 - comand install: npm install nodemon -D
 - description comand install: -D é para instalar a biblioteca como dependencia de desenvolvimento (não vai para produção), para evitar ter que toda hora ficar reiniciando o servidor de forma manual para testar as auterações;

#4º KNEX.js

- Descripton: biblioteca utilizada para conectar e construir as requisições de banco de dados (QueryBuilder)
- 1º comand install: npm install knex
- 2º comand install: npm install "your specific bank" (pg, sqlite3, mysql, mysql2, oracledb, mssql) nesse proetos usamos npm install sqlite3


#5º CORS

- Descripton: biblioteca de segurança que definira quem pode acessar a aplicação 
- 1º comand install: npm install cors