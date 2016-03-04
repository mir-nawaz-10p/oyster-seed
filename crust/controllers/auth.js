var UserFacade = require("../../lib/facade/users"),
    cache = require("ephemeral"),
    redis,
    lodash = global.Packages.lodash,
    chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

redis = cache.initialize({
    client: "redis"
});

function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

function login(req, res, next) {

    new UserFacade(req).login(req.getInputObject()).then(function(output) {
        if (lodash.isEmpty(output)) {
            res.status(404).send({
                meta: { code: 404 },
                results: null
            });
        } else {
            var token = randomString(30, chars);
            redis.set(token, JSON.stringify(output), 60 * 60);
            global.shape(output).results = lodash.merge(output, { token: token });
            res.status(200).send(global.shape(output));
        }
    }).catch(next);

}



module.exports = {
    login: login
};
