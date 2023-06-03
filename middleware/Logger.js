const jwt = require("jsonwebtoken");
const { error } = require("../utils/wrapper");
const User = require("../model/User");
const logger = async (req, res, next) => {
  // console.log('middle ');
  if (
    !req.headers ||
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    // return res.send("Authorization is Requried");

    return res.send(error(401, "Authorization is Requried"));
  }
  const BearerH = req.headers.authorization.split(" ")[1];
  try {
    const token = jwt.verify(BearerH, process.env.accessToken);
    // console.log(token);
    req._id = token._id;
    // console.log("eeeeeeeeeeeeeeeeeeeeeeeee");
    const user = await User.findById(req._id);
    if (!user) {
      return res.send(error(404, "User not found It's middleware call"));
      // return res.send("User not found It's middleware call");
    }
    console.log("vipin");
    next();
  } catch (e) {
    // console.log(e);
    // return res.status(401).send("Invalid access key");
    return res.send(error(401, "Invalid access key"));
  }
  //   console.log(BearerH);
};

module.exports = logger;
