const { SubCategoryService } = require("../services");

//create SubCategory

const CreateSubCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await SubCategoryService.SubcategoryCreate(reqBody);
        if (!category) {
            throw new Error("category Not Created , Please try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully sub category Created!...",
            data: category
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//SubCategory list
const SubCategoryList = async (req, res) => {
    try {
        const list = await SubCategoryService.SubcategoryList(req, res);

        res.status(200).json({
            success: true,
            message: " Sub Category Data SuccessFully Get !.....",
            data: list
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//get SubCategory id

const SubCategoryId = async (req, res) => {
    try {
        const subcategoryId = req.params.subcategoryId;
        const ID = await SubCategoryService.SubcategoryId(subcategoryId);

        if (!ID) {
            throw new Error("Subcategory Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully SubCategory List Get!....",
            data: { ID }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete SubCategory

const DeleteSubCategory = async (req, res) => {
    try {
        const subcategoryId = req.params.subcategoryId;
        const ID = await SubCategoryService.SubcategoryId(subcategoryId);
        if (!ID) {
            throw new Error("subcategory Not Found !...");
        };

        await SubCategoryService.DeleteSubcategory(subcategoryId);
        res.status(200).json({
            success: true,
            message: "Suucessfully subcategory Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update SubCategory

const UpdateSubCategory = async (req, res) => {
    try {
        const subcategoryId = req.params.subcategoryId;
        const ID = await SubCategoryService.SubcategoryId(subcategoryId);
        if (!ID) {
            throw new Error("subcategory Not Found !...");
        };
        await SubCategoryService.UpdateSubcategory(subcategoryId, req.body);

        res.status(200).json({
            success: true,
            message: "subcategory details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    CreateSubCategory,
    SubCategoryList,
    SubCategoryId,
    DeleteSubCategory,
    UpdateSubCategory
}