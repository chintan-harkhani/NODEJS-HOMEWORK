const { subcategory } = require("../models");

//create sub category

const SubcategoryCreate = async (reqBody) => {
    return (await subcategory.create(reqBody)).populate("child_category" );
};

// sub category List

const SubcategoryList  = async(req ,res ) =>{
     return subcategory.find(
        // {$or :[{is_active : true}]}
     ).populate("child_category" );
};

// get  sub category id

const SubcategoryId = async (subcategoryId) =>{
     return subcategory.findById(subcategoryId).populate("child_category" );
};

//delete us sub categoryer

const DeleteSubcategory = async (subcategoryId) =>{
     return subcategory.findByIdAndDelete(subcategoryId);
};

//update  sub category

const UpdateSubcategory = async (subcategoryId , updateBody) =>{
    return subcategory.findByIdAndUpdate(subcategoryId , { $set : updateBody});
}

module.exports = {
        SubcategoryCreate,
        SubcategoryList,
        SubcategoryId,
        DeleteSubcategory,
        UpdateSubcategory
}