const { productservice } = require("../services");

//create product


const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;

        const Product = await productservice.createProduct(reqBody);

        if (!Product) {
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully Product Created....",
            data: { Product }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// product list

const GetProductList = async (req, res) => {
    try {
         const GetList = await productservice.ProductList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Product list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

/** delete Product list  */

const Deleteproduct = async (req, res) => {
    try {
         const productId = req.params.productId;
         const productdelete = await productservice.ProductId(productId);
         if (!productdelete) {
              throw new Error("Product Iteam Not Found....");
         }

         await productservice.DeleteProduct(productId);

         res.status(200).json({
              success: true,
              message: "Products Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}
module.exports = {
     createProduct,
     GetProductList,
     Deleteproduct,
}