var authController = require("../../controllers/auth");
var router = require("express").Router();

router.route("/login")
    .get(authController.login);

router.route("/logout")
    .get(authController.isAuthenticated, authController.logout);
module.exports = router;
