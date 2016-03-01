var Promise = global.Packages.Promise,
    _ = global.Packages.lodash,
    Rules = global.Packages.Oyster.Helpers.rules,
    ValidationHelper = global.Packages.Oyster.Helpers.validation,
    Users = require('../models/Users');

module.exports = {
  getAll,
  save,
  getById,
  deleteById,
  updateById
};

function getAll(req, res) {
	new Users().find(req.getInputObject())
			.then(function(data){
                res.send(data);
            })
			.catch(function(err) {
				res.send(err);
			});
};

function save(req, res) {
	res.send({hello: "save !"});
};

function getById(req, res, next) {
	res.send({hello: "get by id!"});
	return next();
};

function deleteById(req, res, next) {
	res.send({hello: "delete by id!"});
	return next();
};

function updateById(req, res, next) {
	res.send({hello: "update by id!"});
	return next();
};
