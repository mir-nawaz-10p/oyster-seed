function loadPackages(){
    var packages = {};
    
    // all external packages should be initialized here

    // this will give us better control to manage exernal packages

    packages.Promise = require("bluebird");
    packages.lodash = require("lodash");
    packages.Oyster = require("node-oyster");
    packages.db = require("../models/db");
    global.Packages = packages;
}

module.exports = loadPackages;