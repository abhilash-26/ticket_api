const router = require("express").Router();
const userRoute = require("./user.route");
const ticketRoute = require("./ticket.route");

router.get("/test", (req, res) => res.send("ok"));

// router.use("/product", productRoute);
router.use("/user", userRoute);
router.use("/ticket", ticketRoute);
// router.use("/oauth", oAuthRoute);

module.exports = router;

// console.log("test");
