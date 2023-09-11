const { child } = require("../models");

//create child

const ChildCreate = async (reqBody) => {
    return child.create(reqBody)
};

//list ChildList

const ChildList  = async(req ,res ) =>{
     return child.find(
        // {$or :[{is_active : true}]}
     );
};

// get child id

const ChildId = async (childId) =>{
     return child.findById(childId);
};

//delete child

const DeleteChild = async (childId) =>{
     return child.findByIdAndDelete(childId);
};

//update child

const UpdateChild = async (childId , updateBody) =>{
    return child.findByIdAndUpdate(childId , { $set : updateBody});
}

module.exports = {
    ChildCreate,
    ChildList,
    ChildId,
    DeleteChild,
    UpdateChild
}