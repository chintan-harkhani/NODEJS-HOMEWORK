const { userservice } = require("../services");

// crate user

const createuser = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userservice.createUser(reqBody);

        if(!user){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:reqBody ,
            data:{reqBody}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

module.exports = {
    createuser
}