var userController = require("../../controllers/users");
var router = require("express").Router();

router.route("/")
    .get(userController.getAll)
    .post(userController.save);

router.route("/:id")
    .get(userController.getById)
    .delete(userController.deleteById)
    .put(userController.updateById);

module.exports = router;
