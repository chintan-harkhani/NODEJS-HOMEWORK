const { Product } = require("../models");

// create products

const createProduct = async (reqBody) => {
    return Product.create(reqBody);
}

//product lis

const ProductList = async (req, res) => {
    return Product.find({$or : [{is_active : true , quantity : 1}]});
}
//get product id
const ProductId = async (productId) => {
    return Product.findById(productId);
}

/** Delete Product*/

const DeleteProduct = async (productId) => {
    return Product.findByIdAndDelete(productId);
}
module.exports = {
    createProduct,
    ProductList,
    ProductId,
    DeleteProduct
}
