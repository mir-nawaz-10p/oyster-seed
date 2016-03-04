var authController = require("../../controllers/auth");
var router = require("express").Router();

router.route("/login")
    .get(authController.login);

module.exports = router;
