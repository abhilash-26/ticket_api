const { failResponse, sucessResponse } = require("../utils/responseHandler");
const userService = require("../services/user.service");

/**
 * Create new user
 */
exports.create = async (req, res, next) => {
  try {
    await userService.createUser(req, res, next);
  } catch (error) {
    return failResponse(res, null, 500, error.message);
  }
};

/**
 * user sign in
 */

exports.signIn = async (req, res, next) => {
  try {
    await userService.signInUser(req, res, next);
  } catch (error) {
    return failResponse(res, null, 401, error.message);
  }
};
