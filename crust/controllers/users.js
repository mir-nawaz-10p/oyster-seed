
var UserFacade = require('../../lib/facade/users');

module.exports = {
  getAll,
  save,
  getById,
  deleteById,
  updateById
};

function getAll(req, res, next){

    var userFacade = new UserFacade(req);
    
    userFacade.getAll(req.getInputObject()).then(function(output){
        res.status(200).send(global.shape(output))
    }).catch(function(e){
        next(e);
    });
}

function save(req, res, next){

    var userFacade = new UserFacade(req);

    userFacade.save(req.getInputObject()).then(function(output){
        res.status(200).send(global.shape(output))
    }).catch(function(e){
            next(e);
        });
}

function getById(req, res, next){

    var userFacade = new UserFacade(req);

    userFacade.getById(req.getInputObject()).then(function(output){
        res.status(200).send(global.shape(output))
    }).catch(function(e){
            next(e);
        });
}

function deleteById(req, res, next){

    var userFacade = new UserFacade(req);

    userFacade.deleteById(req.getInputObject()).then(function(output){
        res.status(200).send(global.shape(output))
    }).catch(function(e){
            next(e);
        });
}

function updateById(req, res, next){

    var userFacade = new UserFacade(req);

    userFacade.updateById(req.getInputObject()).then(function(output){
        res.status(200).send(global.shape(output))
    }).catch(function(e){
            next(e);
        });
}
