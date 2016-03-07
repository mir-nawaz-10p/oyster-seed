function loadPackages() {
    var packages = {},
        cache = require("ephemeral"),
        redis = cache.initialize({
            client: "redis"
        });

    // all external packages should be initialized here

    // this will give us better control to manage exernal packages

    packages.Promise = require("bluebird");
    packages.lodash = require("lodash");
    packages.Oyster = require("node-oyster");
    packages.redis = redis;
    global.Packages = packages;
}

module.exports = loadPackages;
