var db = {
	mongo: getMongoClient,
	mysql: getMysqlClient,
	id: uniqueId
};

var config = require("../constants/db");
var storehouse = require('storehouse');

function getMongoClient() {
    return storehouse.initialize(config.mongo);
};

function getMysqlClient() {
    return storehouse.initialize(config.mysql);
};

function uniqueId() {
    return String('tp-' + new Date().getTime());
};

module.exports = db;


