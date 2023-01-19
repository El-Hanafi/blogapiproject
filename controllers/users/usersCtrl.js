const User = require("../../model/BlogUser/BlogUser");

usersControllers = {
  //Register
  usrRegisterCtrl: async (req, res) => {
    const { firstname, lastname, profilePhoto, email, password } = req.body;
    try {
      //checking if email exists
      const userFound = await User.findOne({ email });
      if (userFound) {
        return res.json({
          msg: "User with this email already exists",
        });
      }

      //Password hashing

      //create the user
      const user = await User.create({
        firstname,
        lastname,
        email,
        password,
      });
      res.json({
        status: "success",
        data: user,
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  //login
  usrLoginCtrl: async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "user logged in",
      });
    } catch (error) {
      res.json(error.message);
    }
  },
  //get profile
  usrProfileCtrl: async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "profile route",
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  //get users
  usrsCtrl: async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "get users route",
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  //delete user
  usrDeleteCtrl: async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "delete user route",
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  usrUpdateCtrl: async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "update user route",
      });
    } catch (error) {
      res.json(error.message);
    }
  },
};

module.exports = usersControllers;
