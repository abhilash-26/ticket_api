require("dotenv").config();

const db_url = process.env.mongo_url;
const port = process.env.port;
const jwt_expiry = process.env.jwt_expiration_time_minutes;
const jwt_secret = process.env.jwt_secret;
const rounds = process.env.rounds;

module.exports = { db_url, port, jwt_expiry, jwt_secret, rounds };
