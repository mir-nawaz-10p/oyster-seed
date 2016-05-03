"use strict";
var Rules = global.Packages.Oyster.Helpers.rules,
    UsersModel = require("../models/Users"),
    usersValidations = require("../validations/users"),
    messageConstants = require("../constants/message"),
    id = require("../models/db").id();

var UserFacade = global.Packages.Oyster.BaseFacade.extend();

/**
 *
 * Get all users
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
 * Save user
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
            return new UsersModel(inputObject).save().then(function(res){
                return {message: messageConstants.SUCCESS};
            });
        });

};

/**
 *
 * Get user details
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
 * Delete user
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.deleteById = function deleteById(inputObject) {

    return new UsersModel({
        id: inputObject.id
    }).deleteObject().then(function(){
        return {message: messageConstants.SUCCESS};
    });

};

/**
 *
 * Update user
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.updateById = function updateById(inputObject) {

    var rules = new Rules();
    rules.addMulti(usersValidations.save);

    return rules.validate(inputObject)
        .then(function() {
            return new UsersModel(inputObject).save().then(function(){
                return {message: messageConstants.SUCCESS};
            });
        });

};
/**
 *
 * Login user
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
