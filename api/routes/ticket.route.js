const router = require("express").Router();
const controller = require("../controllers/ticket.controller");

router.post("/create", controller.create);

router.get("/list", controller.getTicketList);

module.exports = router;
