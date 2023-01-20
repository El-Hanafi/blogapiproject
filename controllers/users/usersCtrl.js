const bcrypt = require('bcryptjs');
const User = require("../../model/BlogUser/BlogUser");
const generateToken = require('../../utils/generateToken');
const getTokenFromHeader = require('../../utils/getTokenFromHeader');

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
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
      
      //create the user
      const user = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
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
    const  {email, password} = req.body
    try {
        //check if email exists
        const userFound = await User.findOne({email});
        if(!userFound) {
            return res.json({
                msg: "Invalid login credentials"
            });
        }

        const isPasswordMatched = await bcrypt.compare(password, userFound.password);

        if(!isPasswordMatched) {
            return res.json({
                msg: "Invalid login credentials"
            });
        }

      res.json({
        status: "success",
        data: {
          firstname: userFound.firstname,
          lastname: userFound.lastname,
          email: userFound.email,
          isAdmin: userFound.isAdmin,
          token: generateToken(userFound._id)
        },
      });
    } catch (error) {
      res.json(error.message);
    }
  },
  //get profile
  usrProfileCtrl: async (req, res) => {
    const {id} = req.params ;
    try {
      const token = getTokenFromHeader(req);
      console.log(token);

      const user = await User.findById(id);
      res.json({
        status: "success",
        data: user,
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
