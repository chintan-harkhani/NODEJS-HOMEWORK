const { category } = require("../models");

/** create category
* @param {object} reqBody
* @returns {Promise<category>}
*/

const createCategory = async (reqBody) => {
    return category.create(reqBody);
}



/** get category list  */

const GetCategoryList = async (req, res) => {
    return category.find();
  }

/** Get category id */
  const DeleteCategoryId = async (categoryid) => {
    return category.findById(categoryid);
}

/** Delete category */

const  DeleteCategory  = async (categoryid) =>{
return  category.findByIdAndDelete(categoryid);
}
module.exports = {
    createCategory,
    GetCategoryList,
    DeleteCategoryId,
    DeleteCategory
}