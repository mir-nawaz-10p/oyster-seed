oyster-seed
===========

Project initial template that based on oyster recommended structure to build node apps


## Prerequisites

- NodeJS `v4.2.4`
- npm `v3.7.3`
- nodemon `v1.9.1`
- MongoDB `v3.2.3`
- mysql  `Ver 14.14 Distrib 5.5.35`

## Setup Instructions

- Clone repository
- `$ npm run setup`
- `$ npm start`

## Api Documentation 
- `$ npm install http-server -g`
- `$ npm install apidoc -g`
- `$ npm run docs`

## e2e Testing with Frisby
- `$ npm install jasmine-node -g`
- `$ npm test`

## Migration scripts
- `$ npm install -g db-migrate`
- `$ npm install -g db-migrate-mongodb`
* echo "update mongodb database"
* pushd ./database/mongodb
*   db-migrate up
* popd
* echo "drop mongodb collection"
* pushd ./database/mongodb
*   db-migrate down
* popd
- `$ npm install -g db-migrate-mysql`
- `$ db-migrate create users`
* echo "update mysql database"
* pushd ./database/mysql
*   db-migrate up
* popd
* echo "drop mysql table"
* pushd ./database/mysql
*  db-migrate down
* popd
* [Reference db-migrate docs](http://umigrate.readthedocs.org/projects/db-migrate/en/latest/ "Documentation")