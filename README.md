<h4 align="center">
  🚀 Semana OmniStack 11.0
</h4>


Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

https://github.com/rocketseat-education/semana-omnistack-11


- Versão do Node e NPM (Node package manager)

     - Terminal->> node -v
     - Terminal->> npm -v


- Instalando chocolatey/NodeJS (https://chocolatey.org/)

     - Terminal->> Get-ExecutionPolicy
     - Terminal->> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
     - Terminal->> cinst nodejs-lts //abaixa a versão atual LTS do NodeJS e instala

- Criando o backend (\backend>):

     - Terminal->> npm init -y //Cria o package.json
     - Terminal->> npm install express
     - Terminal->> node index.js //Execxuta o Serviço

- Criando o frontend (\frontend>):

     - Terminal->> npx create-react-app frontend // Se der erro instalar: npm install -g create-react-app
     - Terminal->> npm start //Executa o frontend

 - Banco de Dados (\backend>):
  
    SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server, ...
    NoSQL: MongoDB, CouchDB, ...
   
    Vamos utilizar SQLite mas usando Query Builder, assim pode usar em qq bd SQL acima:
    
    instalando o KNEX.JS:
    - Terminal->> npx knex init //cria arquivo de conexão
    - Terminal->> npx knex migrate:make create_ongs // criando migrations
    - Terminal->> npx knex migrate:latest //executando a migration
    - Terminal->> npx knex migrate:rollback //desfaz a ultima migration que rodou
    - Terminal->> npx knex migrate:status //mostra as migrations executadas
	
- Pacote de Icones/Rotas (\frontend>):

     - Terminal->> npm install react-icons
     - Terminal->> npm install react-router-dom
		
- Pacote de Axios (\frontend>):		

     - Terminal->> npm install axios
		

- validações back-end (\backend>):
     
     - Terminal->> npm install celebrate
	
- Instalando pacotes teste (TDD) (\backend>):

     - Terminal->> npm install jest	
     - Terminal->> npx jest --init //cria projeto de test
     - Terminal->> npm teste //executa teste
     - Terminal->> npm install cross-env
     - Terminal->> npm install supertest

- Dica: Para não ter que ficar reiniciando o RUN a cada alteração, instalar:
      
     - npm install nodemon -D
     - na tag Scripts do package.json:
              "scripts": {
                "start": "nodemon index.js"
      - Rodar aplicação agora com: npm start

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *  Métodos HTTP:
 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 
 * Tipos de Parametros:
 
 * Query Params: Parâmetros nomeados enviados no rota após "?" (filtro, paginação, ...)
 * Route Params: Parâmetros utilizados para identificar recursos (EX: /users) 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
