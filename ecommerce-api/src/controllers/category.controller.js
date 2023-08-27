const { categoryservice } = require("../services");

// crate user

const createcategory = async (req, res) => {
     try {
          const reqBody = req.body;

          const category = await categoryservice.createCategory(reqBody);

          if (!category) {
               throw new Error("Someting is Wrong , Please  try again later !...");
          }

          res.status(200).json({
               success: true,
               message: "Data successfully add ...",
               data: { category }
          })
     }
     catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}


const GetcategoryList = async (req, res) => {
     try {
          const GetList = await categoryservice.GetCategoryList(req, res);

          res.status(200).json({
               success: true,
               message: "SuccessFully All Category list Get.....",
               data: GetList,
          })
     } catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

/** delete Category list  */

const Deletecategory = async (req, res) => {
     try {
          const categoryid = req.params.categoryid;
          const categorydelete = await categoryservice.DeleteCategoryId(categoryid);
          if (!categorydelete) {
               throw new Error("Category Iteam Not Found....");
          }

          await categoryservice.DeleteCategory(categoryid);

          res.status(200).json({
               success: true,
               message: "Category Data SuccessFully Deleteded.....",
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          })
     }
}
module.exports = {
     createcategory,
     GetcategoryList,
     Deletecategory
}