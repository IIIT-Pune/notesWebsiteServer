const { success } = require( "../utils/wrapper" );
const userControllers = async (req, res) => {

    res.send(success(201, "Successful"));
};
module.exports = {
userControllers
  };
  