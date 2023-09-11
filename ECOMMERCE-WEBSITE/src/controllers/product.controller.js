const { PorductService } = require("../services");

//create product

const CreateProduct = async (req, res) => {
    try {
        const reqBody = req.body;

        const product = await PorductService.ProductCreate(reqBody);
        if (!product) {
            throw new Error("product Not Created , Please try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully product Created!...",
            data:  product 
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//product list
const ProductList = async (req, res) => {
    try {
        const list = await PorductService.ProductList(req, res);

        res.status(200).json({
            success: true,
            message: " Product Data SuccessFully Get !.....",
            data: list 
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//get Productid

const ProductId = async (req, res) => {
    try {
        const productId = req.params.productId;
        const ID = await PorductService.ProductId(productId);

        if (!ID) {
            throw new Error("Product Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Product List Get!....",
            data: { ID }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete Product

const DeleteProduct= async (req, res) => {
    try {
        const productId = req.params.productId;
        const ID = await PorductService.ProductId(productId);
        if (!ID) {
            throw new Error("Product Not Found !...");
        };

        await PorductService.DeleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Product Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update product

const UpdateProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const ID = await PorductService.ProductId(productId);
        if (!ID) {
            throw new Error("Product Not Found !...");
        };
        await PorductService.UpdateProduct(productId, req.body);

        res.status(200).json({
            success: true,
            message: "Product details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
  CreateProduct,
  ProductList,
  ProductId,
  DeleteProduct,
  UpdateProduct
}