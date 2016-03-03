
var Promise = global.Packages.Promise,
    _ = global.Packages.lodash,
    Rules = global.Packages.Oyster.Helpers.rules,
    ValidationHelper = global.Packages.Oyster.Helpers.validation,
    usersModel = require('../models/Users'),
    usersValidations = require('../validations/users');

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
    return new usersModel().find(inputObject).then(function(docs){
        return {
            docs: docs
        };
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

    var rules = new Rules();
    rules.addMulti(usersValidations);
    inputObject.id = global.Packages.db.id();
    //unnecessary user holding
    var user = new usersModel(inputObject);
    return rules.validate(inputObject).then(function(){
       return user.save().then(function(doc){
               return {
                    doc: inputObject
                };
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

    //good practice
    //return new usersModel({id: inputObject.id}).fetch().then(function(doc){
    //    return {doc: doc};
    //});
    var user = new usersModel({id: inputObject.id});
       return user.fetch().then(function(doc){
               return {
                    doc: doc
                };
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

    var users = new usersModel({id: inputObject.id});
    return users.deleteObject().then(function(doc){
        return {
            doc: doc
        };
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

    var rules = new Rules();
    rules.addMulti(usersValidations);
    var user = new usersModel(inputObject);
    return rules.validate(inputObject).then(function(){
       return user.save().then(function(doc){
               return {
                    doc: doc
                };
            });
    });

};

module.exports = UserFacade;
