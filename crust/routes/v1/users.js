var userController = require("../../controllers/users");
var authController = require("../../controllers/auth");
var router = require("express").Router();

router.route("/")
    .get(authController.isAuthenticated, userController.getAll)
    .post(userController.save);

router.route("/info")
    .get(authController.isAuthenticated, userController.getInfo);

router.route("/:id")
    .get(userController.getById)
    .delete(userController.deleteById)
    .put(userController.updateById);

module.exports = router;
