var UserFacade = require("../../lib/facade/users"),
    cache = require("ephemeral"),
    redis;
redis = cache.initialize({
    client: "redis"
});

function getAll(req, res, next) {

    new UserFacade(req).getAll(req.getInputObject()).then(function(output) {
        res.status(200).send(global.shape(output));
    }).catch(next);
}

function save(req, res, next) {

    new UserFacade(req).save(req.getInputObject()).then(function(output) {
        res.status(200).send(global.shape(output));
    }).catch(next);
}

function getById(req, res, next) {

    new UserFacade(req).getById(req.getInputObject()).then(function(output) {
        res.status(200).send(global.shape(output));
    }).catch(next);
}

function deleteById(req, res, next) {

    new UserFacade(req).deleteById(req.getInputObject()).then(function(output) {
        res.status(200).send(global.shape(output));
    }).catch(next);
}

function updateById(req, res, next) {

    new UserFacade(req).updateById(req.getInputObject()).then(function(output) {
        res.status(200).send(global.shape(output));
    }).catch(next);

}

function getInfo(req, res, next) {

    redis.get(req.headers.token)
        .then(function(user) {
            res.status(200).send(global.shape(JSON.parse(user)));
        }).catch(next);

}
module.exports = {
    getAll: getAll,
    save: save,
    getById: getById,
    deleteById: deleteById,
    updateById: updateById,
    getInfo: getInfo
};
