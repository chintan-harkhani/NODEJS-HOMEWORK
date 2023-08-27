const express = require("express");
const { usercontroller } = require("../../controllers");
const { UserValidation } = require("../../validations");
const validate = require("../../middlewares/validate")
const routes = express.Router();


routes.post("/creat-user",
  validate(UserValidation.createUser),
  usercontroller.createuser
);

/** get user list */
routes.get("/list",
  // validate(userValidatino.getUserList),
  usercontroller.userlist
);


/** Delete user */
routes.delete(
  "/delete-user/:userId",
  // validate(userValidation.getDetails),
  usercontroller.deleteUser
);

//update details

routes.put(
  "/update-details/:userId",
  // validate(userValidation.getDetails),
  usercontroller.UpdateDetails
)
module.exports = routes;

