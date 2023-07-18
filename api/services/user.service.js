const User = require("../models/user.model");
const { failResponse, sucessResponse } = require("../utils/responseHandler");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name,email,password)

    const result = await User.create({
      name,
      email,
      password,
    });

    const token = result.token();

    let dataToSend = {
      user: result.transform(),
      token: token,
    };

    sucessResponse(res, dataToSend, 200, "User created");
  } catch (error) {
    failResponse(res, null, 500, error.message);
  }
};

exports.signInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) return failResponse(res, null, 500, "No user Found");

    const token = user.token();

    let dataToSend = {
      user: user.transform(),
      token: token,
    };

    const result = await user.passwordMatches(password);

    if (result) return sucessResponse(res, dataToSend, 200, "User logged In");

    return failResponse(res, null, 401, "Invalid email or password");
  } catch (error) {
    return failResponse(res, null, 401, error.message);
  }
};
