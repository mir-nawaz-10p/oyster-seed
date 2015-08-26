
var Promise = global.Packages.Promise,
    _ = global.Packages.lodash;

var TextFacade = global.Packages.Oyster.BaseFacade.extend();

var arr = [0,1,2,3,4,5]; //for testing

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
TextFacade.prototype.testFunction = function testFunction(inputObject) {

    return new Promise(function(resolve, reject) {
        return resolve({
            arr: arr,
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
TextFacade.prototype.counts = function counts(inputObject) {


    return new Promise(function(resolve, reject) {
        return resolve({
            count: _.size(arr),
            inputObject: inputObject
        });
    });

};

module.exports = TextFacade;