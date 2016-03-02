
var Promise = global.Packages.Promise,
    _ = global.Packages.lodash,
    Rules = global.Packages.Oyster.Helpers.rules,
    ValidationHelper = global.Packages.Oyster.Helpers.validation,
    Users = require('../models/Users');

var UserFacade = global.Packages.Oyster.BaseFacade.extend();

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.getAll = function getAll(inputObject) {

    return new Users().find(inputObject).then(function(data){
        return data;
    });

};
/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.save = function save(inputObject) {

    return new Promise(function(resolve, reject) {
        return resolve({
            hello: "save user!",
            inputObject: inputObject
        });
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

    return new Promise(function(resolve, reject) {
        return resolve({
            hello: "getById user!",
            inputObject: inputObject
        });
    });

};

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.deleteById = function deleteById(inputObject) {

    return new Promise(function(resolve, reject) {
        return resolve({
            hello: "deleteById user!",
            inputObject: inputObject
        });
    });

};

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
UserFacade.prototype.updateById = function updateById(inputObject) {

    return new Promise(function(resolve, reject) {
        return resolve({
            hello: "updateById user!",
            inputObject: inputObject
        });
    });

};

module.exports = UserFacade;