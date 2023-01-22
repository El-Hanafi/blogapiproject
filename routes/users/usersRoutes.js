const express = require("express");
const usersControllers = require("../../controllers/users/usersCtrl");
const isLoggedin = require("../../middlewares/isLoggedin");

const userRouter = express.Router();

//POST/api/v1/users/register
userRouter.post("/register", usersControllers.usrRegisterCtrl);

//POST/api/v1/users/login
userRouter.post("/login",  usersControllers.usrLoginCtrl);

//GET/api/v1/users/:id
userRouter.get("/profile/", isLoggedin, usersControllers.usrProfileCtrl);

//GET/api/v1/users
userRouter.get("/",  usersControllers.usrsCtrl);

//DELETE/api/v1/users/:id
userRouter.delete("/:id",  usersControllers.usrDeleteCtrl);

//PUT/api/v1/users
userRouter.put("/:id",  usersControllers.usrUpdateCtrl);

//POST/api/v1/profile-photo-upload
userRouter.post("/profile-photo-upload",  usersControllers.prflPhotoUploadCtrl);

module.exports = userRouter;
