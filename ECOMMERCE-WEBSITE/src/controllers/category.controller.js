const { CategoryService} = require("../services");

//create Category

const CreateCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await CategoryService.CategoryCreate(reqBody);
        if (!category) {
            throw new Error("category Not Created , Please try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully category Created!...",
            data:  category
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Category list
const CategoryList = async (req, res) => {
    try {
        const list = await CategoryService.CategoryList(req, res);

        res.status(200).json({
            success: true,
            message: " Category Data SuccessFully Get !.....",
            data: list
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//get Category id

const CategoryId = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const ID = await CategoryService.CategoryId(categoryId);

        if (!ID) {
            throw new Error("category Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Category List Get!....",
            data: { ID }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete Category

const DeleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const ID = await CategoryService.CategoryId(categoryId);
        if (!ID) {
            throw new Error("category Not Found !...");
        };

        await CategoryService.DeleteCategory(categoryId);
        res.status(200).json({
            success: true,
            message: "Suucessfully category Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update Category

const UpdateCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const ID = await CategoryService.CategoryId(categoryId);
        if (!ID) {
            throw new Error("category Not Found !...");
        };
        await CategoryService.UpdateCategory(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "category details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
     CreateCategory,
     CategoryList,
     CategoryId,
     DeleteCategory,
     UpdateCategory
}