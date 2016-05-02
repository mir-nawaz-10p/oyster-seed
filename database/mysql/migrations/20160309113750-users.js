"use strict";

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
};

exports.up = function(db, callback) {
    var tableName = "users";
    db.createTable(tableName, {
        id: { type: "int", primaryKey: true },
        name: "string",
        username: "string",
        password: "string",
        admin: "string",
        location: "string",
        created_at: "string",
        updated_at: "string",
        date_of_birth: "string"
    }, callback);
    callback();
};

exports.down = function(db, callback) {
    db.dropTable("users", callback);
    callback();
};
