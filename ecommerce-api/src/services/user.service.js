const { user } = require("../models");

/**
 * create user
* @param {object} reqBody
* @returns {Promise<user>}
*/
const createUser = async (reqBody) => {
    return user.create(reqBody);
}

/**
 * get User list
* @param {object} filter
* @param {boject} options
* @returns {Promise<user>}
*/
const getuserlist = async (req, res) => {

    return user.find();
};
/**
 * Get user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getUserById = async (userId) => {
    return user.findById(userId);
};
/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUser = async (userId) => {
    return user.findByIdAndDelete(userId);
};

//upadate  data

const upadateDetails = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody });
}
module.exports = {
    createUser,
    getuserlist,
    getUserById,
    deleteUser,
    upadateDetails,
}