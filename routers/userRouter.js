const { userControllers } = require("../controllers/userControllers");
const logger = require("../middleware/Logger");

const route = require("express").Router();

route.post("/notes", logger, userControllers);
route.post("/labs", logger, userControllers);
route.post("/paper", logger, userControllers);

module.exports = route;
