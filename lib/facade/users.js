
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

    return new Users().find(inputObject).then(function(docs){
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
    rules.addMulti([
        {
            "id": {
                required: true
            }
        },
        {
            "name": {
                required: true
            }
        }
    ]);
    inputObject.id = global.Packages.db.id();
    var user = new Users(inputObject);
    return rules.validate(inputObject).then(function(){
       return user.save().then(function(doc){
               return {
                    doc: doc
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

    var user = new Users({id: inputObject.id});
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

    var users = new Users({id: inputObject.id});
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
    rules.addMulti([
        {
            "id": {
                required: true
            }
        },
        {
            "name": {
                required: true
            }
        }
    ]);
    var user = new Users(inputObject);
    return rules.validate(inputObject).then(function(){
       return user.save().then(function(doc){
               return {
                    doc: doc
                };
            });
    });

};

module.exports = UserFacade;