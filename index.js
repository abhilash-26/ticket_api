const app = require("./config/express");
const connection = require("./config/mongodb");
const router = require("./api/routes/index");
const cors = require("cors");

app.use(cors());
app.use("/api/v1", router);
