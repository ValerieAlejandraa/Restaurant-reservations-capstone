/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./reservations.controller");




//reservations, add Get and Post
router.route("/")
   .get(controller.list)
   .post(controller.create)
   .all(methodNotAllowed)

module.exports = router;
