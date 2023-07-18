const router = require("express").Router();
const controller = require("../controllers/user.controller");

router.post("/register", controller.create);

router.post("/login", controller.signIn);

module.exports = router;
