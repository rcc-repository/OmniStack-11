# React_JS_Basic



1 - Abra o PowerShell em modo adm e digite:

	//Instalando chocolatey / NodeJS (https://chocolatey.org/)

    - Get-ExecutionPolicy
    - Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    - cinst nodejs-lts //abaixa a versão atual LTS do NodeJS e instala

    - node -v //Versão do NodeJS 
    - npm -v //Versão do NPM 

2 - Criando o backend (C:\RodrigoCC\Estudo\React_RocketSeat\backend>):

    - npm init -y //Cria o package.json
    - npm install express
    
    - node index.js //Execxuta o Serviço

3 - Criando o frontend (C:\RodrigoCC\Estudo\React_RocketSeat\frontend>):

    - npx create-react-app frontend // Se der erro instalar: npm install -g create-react-app
    
    - npm start //Executa o frontend

 4 - Banco de Dados:
  
    SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server, ...
    NoSQL: MongoDB, CouchDB, ...
   
    Vamos utilizar SQLite mas usando Query Builder, assim pode usar em qq bd SQL acima:
    instalando o KNEX.JS - ver site
    C:\RodrigoCC\Estudo\React_RocketSeat\backend> npx knex init //cria arquivo de conexão
    C:\RodrigoCC\Estudo\React_RocketSeat\backend> npx knex migrate:make create_ongs // criando migrations
    C:\RodrigoCC\Estudo\React_RocketSeat\backend> npx knex migrate:latest //executando a migration
    C:\RodrigoCC\Estudo\React_RocketSeat\backend> npx knex migrate:rollback //desfaz a ultima migration que rodou
    C:\RodrigoCC\Estudo\React_RocketSeat\backend> npx knex migrate:status //mostra as migrations executadas
	
5 - Pacote de Icones/Rotas:

		C:\RodrigoCC\Estudo\React_RocketSeat\frontend> npm install react-icons
		C:\RodrigoCC\Estudo\React_RocketSeat\frontend> npm install react-router-dom
		
6 - Pacote de Axios:		

		C:\RodrigoCC\Estudo\React_RocketSeat\frontend>npm install axios
		

7 - validações back-end:

	C:\RodrigoCC\Estudo\React_RocketSeat\backend> npm install celebrate
	
8 - Instalando pacotes teste (TDD):

	C:\RodrigoCC\Estudo\React_RocketSeat\backend> npm install jest	
	C:\RodrigoCC\Estudo\React_RocketSeat\backend> npx jest --init //cria projeto de test
	C:\RodrigoCC\Estudo\React_RocketSeat\backend> npm teste //executa teste
	C:\RodrigoCC\Estudo\React_RocketSeat\backend> npm install cross-env
	C:\RodrigoCC\Estudo\React_RocketSeat\backend> npm install supertest

Dicas:

    - Se digitar PS C:\RodrigoCC\Estudo\React_RocketSeat\backend> code .  no PowerShell abre o VScode ja com o projeto conforme pasta que esta acessando

    - Para não ter que ficar reiniciando o RUN a cada alteração, instalar:
        - npm install nodemon -D

        - na tag Scripts do package.json:
              "scripts": {
                "start": "nodemon index.js"

        - Rodar aplicação agora com: npm start

 *  Métodos HTTP:
 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 
 * Tipos de Parametros:
 
 * Query Params: Parâmetros nomeados enviados no rota após "?" (filtro, paginação, ...)
 * Route Params: Parâmetros utilizados para identificar recursos (EX: /users) 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
