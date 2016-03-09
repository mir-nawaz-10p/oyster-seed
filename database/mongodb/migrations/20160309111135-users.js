"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db, callback) {
    db.createCollection("users", callback);
    var toInsert = [{
        "_id": "tp-1457090896861",
        "name": "name",
        "username": "mir1",
        "password": "password1",
        "admin": true
    }, {
        "_id": "tp-1457090896871",
        "name": "name",
        "username": "mir2",
        "password": "password2",
        "admin": true
    }, {
        "_id": "tp-1457090896881",
        "name": "name",
        "username": "mir3",
        "password": "password3",
        "admin": true
    }, {
        "_id": "tp-1457090896891",
        "name": "name",
        "username": "mir4",
        "password": "password4",
        "admin": true
    }, {
        "_id": "tp-1457090896901",
        "name": "name",
        "username": "mir5",
        "password": "password5",
        "admin": true
    }];
    db.insert("users", toInsert, callback);
    callback();
};

exports.down = function(db, callback) {
    db.dropCollection("users", callback);
    callback();
};
