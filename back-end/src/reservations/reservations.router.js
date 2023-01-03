/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./reservations.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

//edit
router
  .route("/:reservation_id/edit")
  .get(controller.read)
  .put(controller.updateReservation)
  .all(methodNotAllowed);

//status
router
  .route("/:reservation_id/status")
  .get(controller.read)
  .put(controller.updateStatus)
  .all(methodNotAllowed);

//reservation_id
router
  .route("/:reservation_id")
  .get(controller.read)
  .put(controller.updateReservation)
  .all(methodNotAllowed);

//root
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;