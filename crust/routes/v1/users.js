var testController = require("../../controllers/index");
var Users = require('../../../lib/facade/users');
var router = require('express').Router();

router.get("/", Users.getAll)
		.post("/", Users.save);
router.get("/:id", Users.getById)
		.delete("/:id", Users.deleteById)
		.put("/:id", Users.updateById);

module.exports = router;