const { category } = require("../models");

//create category

const CategoryCreate = async (reqBody) => {
    return (await (await category.create(reqBody)).populate("sub_catgory" )).populate("child_category")
};

//list category

const CategoryList = async (req, res) => {
    return category.find(
        // {$or :[{is_active : true}]}
    ).populate("sub_catgory").populate("child_category");
};

// get category id

const CategoryId = async (categoryId) => {
    return category.findById(categoryId);
};

//delete category

const DeleteCategory = async (categoryId) => {
    return category.findByIdAndDelete(categoryId);
};

//update category

const UpdateCategory = async (categoryId, updateBody) => {
    return category.findByIdAndUpdate(categoryId, { $set: updateBody });
}

module.exports = {
 CategoryCreate,
 CategoryList,
 CategoryId,
 DeleteCategory,
 UpdateCategory
}