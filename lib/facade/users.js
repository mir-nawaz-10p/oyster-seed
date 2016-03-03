var Rules = global.Packages.Oyster.Helpers.rules,
    usersModel = require("../models/Users"),
    usersValidations = require("../validations/users")
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
    return new usersModel().find(inputObject);

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
    rules.addMulti(usersValidations);
    inputObject.id = id;

    return rules.validate(inputObject).then(function() {
        return new usersModel(inputObject).save();
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

    return new usersModel({ id: inputObject.id }).fetch();

};

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.deleteById = function deleteById(inputObject) {

    return new usersModel({ id: inputObject.id }).deleteObject();

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
    rules.addMulti(usersValidations);

    return rules.validate(inputObject).then(function() {
        return new usersModel(inputObject).save();
    });

};

module.exports = UserFacade;
