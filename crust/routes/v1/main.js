var router = require('express').Router();
router.get("/", function(req, res) {
	res.send({hello: "World!"});
});

module.exports = router;
