const mongoose = require("mongoose");
const { db_url } = require("../api/utils/vars");

const connection = mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error.message));

module.exports = connection;
