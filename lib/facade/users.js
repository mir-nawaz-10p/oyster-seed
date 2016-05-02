"use strict";
var Rules = global.Packages.Oyster.Helpers.rules,
    UsersModel = require("../models/Users"),
    usersValidations = require("../validations/users"),
    id = require("../models/db").id();

var UserFacade = global.Packages.Oyster.BaseFacade.extend();

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.getAll = function getAll(inputObject) {

    //inputObject should validate first
    return new UsersModel().find(inputObject);

};
/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.save = function save(inputObject) {

    var rules = new Rules();
    rules.addMulti(usersValidations.save);
    inputObject.id = id;

    return rules.validate(inputObject)
        .then(function() {
            return new UsersModel(inputObject).save();
        });

};

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.getById = function getById(inputObject) {

    return new UsersModel({
        id: inputObject.id
    }).fetch();

};

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.deleteById = function deleteById(inputObject) {

    return new UsersModel({
        id: inputObject.id
    }).deleteObject();

};

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.updateById = function updateById(inputObject) {

    var rules = new Rules();
    rules.addMulti(usersValidations.save);

    return rules.validate(inputObject)
        .then(function() {
            return new UsersModel(inputObject).save();
        });

};
/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.login = function login(inputObject) {
    var rules = new Rules();
    rules.addMulti(usersValidations.login);

    return rules.validate(inputObject)
        .then(function() {
            return new UsersModel({
                username: inputObject.username,
                password: inputObject.password
            }).fetch();
        });

};
module.exports = UserFacade;
