"use strict";
var authController = require("../../controllers/auth");
var router = require("express").Router(); //eslint-disable-line
/**
 * @api {get} api/v1/auth/login Login authentication
 * @apiVersion 0.0.1
 * @apiName login
 * @apiGroup Auth
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
			"id": "tp-1457090896861",
			"token": "BzufMVzJWXZgV0vxFs9xoJjyirFE8j"
		}
		}
 *
 * @apiError Not-Found The username or password is not correct.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not-Found
		{
		"meta": {
			"code": 404
		},
		"results": null
		}
 */
router.route("/login")
    .get(authController.login);
/**
 * @api {get} api/v1/auth/logout Logout Users
 * @apiVersion 0.0.1
 * @apiName logout
 * @apiGroup Auth
 *
 * @apiSuccess {object} results users status.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
		{
		"meta": {
			"code": 200
		},
		"results": "logged out"
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
router.route("/logout")
    .get(authController.isAuthenticated, authController.logout);

module.exports = router;
