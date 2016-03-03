var UserFacade = require("../../lib/facade/users");

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

module.exports = {
    getAll: getAll,
    save: save,
    getById: getById,
    deleteById: deleteById,
    updateById: updateById
};