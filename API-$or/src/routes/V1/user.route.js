const express =  require("express");
const {usercontroller} = require("../../controllers");
const {UserValidation} =require("../../validations");
const validate = require("../../middlewares/validate")
const  routes = express.Router();

//create user
 routes.post("/creat-user",
  validate(UserValidation.createUser),
   usercontroller.createuser
 );

/** get user list */
routes.get("/list",
  usercontroller.userlist
);


/** Delete user */
routes.delete(
  "/delete-user/:userId",
  usercontroller.deleteUser
);

module.exports =routes;

