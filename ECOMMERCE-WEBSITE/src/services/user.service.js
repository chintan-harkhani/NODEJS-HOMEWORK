const { user } = require("../models");

//create user

const UserCreate = async (reqBody) => {
    return user.create(reqBody)
};

//list UserList

const UserList  = async(req ,res ) =>{
     return user.find(
        // {$or :[{is_active : true}]}
     );
};

// get user id

const UserId = async (userId) =>{
     return user.findById(userId);
};

//delete user

const DeleteUser = async (userId) =>{
     return user.findByIdAndDelete(userId);
};

//update user

const UpdateUser = async (userId , updateBody) =>{
    return user.findByIdAndUpdate(userId , { $set : updateBody});
}

module.exports = {
      UserCreate,
      UserList,
      UserId,
      DeleteUser,
      UpdateUser
}