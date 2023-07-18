const express = require("express");
const { port } = require("../api/utils/vars");

require("dotenv");
const app = express();

app.use(express.json());

const server = app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

module.exports = app;
