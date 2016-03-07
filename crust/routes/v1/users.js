var userController = require("../../controllers/users");
var authController = require("../../controllers/auth");
var router = require("express").Router();

router.use(authController.isAuthenticated);
/**
 * @api {get} api/v1/users Request Users list
 * @apiVersion 0.0.1
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
 * @apiVersion 0.0.1
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
/**
 * @api {get} api/v1/users/info Request current user's information
 * @apiVersion 0.0.1
 * @apiName getInfo
 * @apiGroup Users
 *
 * @apiHeader {String} token User's authentication token.
 * 
 * @apiSuccess {object} results users object.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
		{
		  "meta": {
		    "code": 200
		  },
		  "results": {
		    "name": "name",
		    "username": "mir123",
		    "password": "password",
		    "admin": true,
		    "id": "tp-1457090896861"
		  }
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
    .get(authController.isAuthenticated, userController.getInfo);

router.route("/:id")
/**
 * @api {get} api/v1/user/:id Request User information
 * @apiVersion 0.0.1
 * @apiName getById
 * @apiGroup Users
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
		{
			"meta": {
				"code": 200
			},
				"results": {
				"name": "name",
				"username": "mir123",
				"password": "password",
				"admin": true,
				"id": "tp-1457090896861"
			}
		}
 *
 * @apiError UserNotFound The id of the User was not found.
 * @apiError Forbidden The token of the User was not found.
 *
 * @apiErrorExample Error-Response:
		HTTP/1.1 404 Not Found
		{
		  "meta": {
		    "code": 404
		  },
		  "results": null
		}
		HTTP/1.1 403 Forbidden
		{
		  "meta": {
		    "code": 403
		  },
		  "results": null
		}
 */
    .get(userController.getById)
/**
 * @api {delete} api/v1/user/:id Delete User information
 * @apiVersion 0.0.1
 * @apiName deleteById
 * @apiGroup Users
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiSuccess {Object} results user's status.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
		{
		  "meta": {
		    "code": 200
		  },
		  "results": {
		    "ok": 1,
		    "n": 1
		  }
		}
 *
 * @apiError UserNotFound The id of the User was not found.
 * @apiError Forbidden The token of the User was not found.
 *
 * @apiErrorExample Error-Response:
		HTTP/1.1 404 Not Found
		{
		  "meta": {
		    "code": 404
		  },
		  "results": null
		}
		HTTP/1.1 403 Forbidden
		{
		  "meta": {
		    "code": 403
		  },
		  "results": null
		}
 */
    .delete(userController.deleteById)
/**
 * @api {put} api/v1/user/:id Put User information
 * @apiVersion 0.0.1
 * @apiName updateById
 * @apiGroup Users
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiSuccess {Object} results user's status.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
		{
		  "meta": {
		    "code": 200
		  },
		  "results": {
		    "ok": 1,
		    "nModified": 1,
		    "n": 1
		  }
		}
 *
 * @apiError UserNotFound The id of the User was not found.
 * @apiError Forbidden The token of the User was not found.
 *
 * @apiErrorExample Error-Response:
		HTTP/1.1 404 Not Found
		{
		  "meta": {
		    "code": 404
		  },
		  "results": null
		}
		HTTP/1.1 403 Forbidden
		{
		  "meta": {
		    "code": 403
		  },
		  "results": null
		}
 */
    .put(userController.updateById);

module.exports = router;
