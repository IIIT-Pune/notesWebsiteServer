const {
    signupControlles,
    loginController,
    refreshController,
    countController,
    forgetPassword
    
  } = require("../controllers/authControllers");
  
  const route = require("express").Router();
  
  route.post("/signup", signupControlles);
  route.post("/login", loginController);
  route.get("/refresh", refreshController);
  route.get("/count", countController);
  route.put("/", forgetPassword);
  
  module.exports = route;