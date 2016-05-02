"use strict";
var UserFacade = require("../../lib/facade/users"),
    redis = global.Packages.redis,
    lodash = global.Packages.lodash,
    chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

function login(req, res, next) {
    new UserFacade(req).login(req.getInputObject())
        .then(function(output) {
            if (lodash.isEmpty(output)) {
                res.status(404).send({
                    meta: { code: 404 },
                    results: output
                });
            }
            else {
                var token = randomString(30, chars);
                redis.set(token, JSON.stringify(output), 60 * 60);
                global.shape(output).results = lodash.merge(output, { token: token });
                res.status(200).send(global.shape(output));
            }
        }).catch(next);
}

function logout(req, res, next) {
    redis.remove(req.headers.token)
        .then(function() {
            res.status(200).send({
                meta: { code: 200 },
                results: "logged out"
            });
        }).catch(next);

}

function isAuthenticated(req, res, next) {
    redis.get(req.headers.token)
        .then(function(user) {
            if (lodash.isEmpty(user)) {
                res.status(403).send({
                    meta: { code: 403 },
                    results: null
                });
            }
            else {
                next();
            }
        }).catch(next);
}

module.exports = {
    login: login,
    logout: logout,
    isAuthenticated: isAuthenticated
};
