# Node.js project with Express, Sequelize, and Postgres

by [Tatenda]

### Directory structure

```shell
src
  ├── app.js         app entry point
  ├── /controllers   controller layer: business logic
  ├── /routes        controller layer: api routes
  ├── /middleware    middleware layer
  ├── /config        config settings
  ├── /models        data access layer: database models
  ├── /errors        Exception handling


### Installation and execution

1. Folder name `Technical-Assessment`;
2. Run npm to install dependencies: `npm install`;
3. Config database credentials inside `/config/config.json`;
4. Install sequelize globally  `npm install -g sequelize-cli` and run `sequelize init`
5. Create database, run `sequelize db:create to create the database`;
6. To create table run `sequelize db:migrate`
7. Run `npm start` to start the server.


### API

- register: `http://localhost:5000/api/v1/register`
- Login: `http://localhost:5000/api/v1/auth/login`
- get-users: `http://localhost:5000/api/v1/auth/users`
- get-user: `http://localhost:5000/api/v1/auth/user`
- edit-user: `http://localhost:5000/api/v1/auth/user/${uuid}`
- delete-user: `http://localhost:5000/api/v1/auth/user/${uuid}`
```
