var userController = require("../../controllers/users");
var router = require('express').Router();

router.get("/", userController.getAll)
		.post("/", userController.save);
router.get("/:id", userController.getById)
		.delete("/:id", userController.deleteById)
		.put("/:id", userController.updateById);

module.exports = router;