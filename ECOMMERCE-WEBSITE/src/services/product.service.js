const { product } = require("../models");

//create Product

const ProductCreate = async (reqBody) => {
    return (await (await (await product.create(reqBody)).populate("category")).populate("sub_category")).populate("child_category");
};

//list Product

const ProductList = async (req, res) => {
    return product.find(
        // {$or :[{is_active : true}]}
    ).populate("category").populate("sub_category").populate("child_category");
};

// get Product id

const ProductId = async (productId) => {
    return product.findById(productId);
};

//delete Product

const DeleteProduct = async (productId) => {
    return product.findByIdAndDelete(productId);
};

//update Product

const UpdateProduct = async (productId, updateBody) => {
    return product.findByIdAndUpdate(productId, { $set: updateBody });
}

module.exports = {
 ProductCreate,
 ProductList,
 ProductId,
 DeleteProduct,
 UpdateProduct
}