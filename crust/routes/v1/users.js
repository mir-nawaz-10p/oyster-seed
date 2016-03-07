var userController = require("../../controllers/users");
var authController = require("../../controllers/auth");
var router = require("express").Router();

router.use(authController.isAuthenticated);
/**
 * @api {get} api/v1/users Request Users list
 * @apiName getAll
 * @apiGroup Users
 *
 * @apiHeader {String} token User's authentication token.
 * 
 * @apiSuccess {array} results users array.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * 
{
  "meta": {
    "code": 200
  },
  "results": [
	    {
	      "name": "name save 123",
	      "password": "password save 123",
	      "admin": true,
	      "id": "tp-1456905175143"
	    },
	    {
	      "name": "name",
	      "password": "password",
	      "admin": true,
	      "id": "tp-1456905225545"
	    }
	]
}
 *
 * @apiError ForbiddenAccess The user token is not authenticatic.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
	{
		"meta": {
		"code": 403
		},
		"results": null
	}
 */
router.route("/")
    .get(userController.getAll)
/**
 * @api {post} api/v1/users Save User 
 * @apiName save
 * @apiGroup Users
 * 
 * @apiParam {String} name Mandatory full name of user .
 * @apiParam {String} username  Mandatory username.
 * @apiParam {String} password  Mandatory password.
 * @apiParam {Boolean} [admin]  optional admin boolean value.
 * @apiParam {String} [location] optional user's location.
 * @apiParam {String} [date_of_birth] optional date of birth.
 * 
 * @apiHeader {String} token User's authentication token.
 * 
 * @apiSuccess {object} results database status.
 *
 * @apiSuccessExample Success-Response:
	HTTP/1.1 200 OK

	{
	  "meta": {
	    "code": 200
	  },
	  "results": {
	    "ok": 1,
	    "nModified": 0,
	    "n": 1,
	    "upserted": [
	      {
	        "index": 0,
	        "_id": "tp-1457345367363"
	      }
	    ]
	  }
	}
 *
 * @apiError ForbiddenAccess The user token is not authenticatic.
 *
 * @apiErrorExample Error-Response:
	HTTP/1.1 400 Bad-Request
	{
	  "meta": {
	    "code": "400",
	    "message": [
	      "Custom error message for field password",
	      "Custom error message for field username"
	    ]
	  }
	}
	HTTP/1.1 403 Forbidden
	{
	  "meta": {
	    "code": 403
	  },
	  "results": null
	}
 */
    .post(userController.save);

router.route("/info")
    .get(authController.isAuthenticated, userController.getInfo);

router.route("/:id")
    .get(userController.getById)
    .delete(userController.deleteById)
    .put(userController.updateById);

module.exports = router;
