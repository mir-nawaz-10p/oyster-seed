var db = {
	mongo: getMongoClient,
	mysql: getMysqlClient
};

var config = require("../constants/db")();
var storehouse = require('storehouse');

function getMongoClient() {
    return storehouse.initialize(config.mongo);
};

function getMysqlClient() {
    return storehouse.initialize(config.mysql);
};

module.exports = db;


