const { cart } = require("../models");

//create cart

const CartCreate = async (reqBody) => {
    return (await (await (await cart.create(reqBody)).populate("User")).populate("product"));
};

//list cart

const CartList = async (req, res) => {
    return cart.find(
        // {$or :[{is_active : true}]}
    ).populate("User").populate("product");
};

// get cart id

const CartId = async (cartId) => {
    return cart.findById(cartId);
};

//delete cart

const DeleteCart = async (cartId) => {
    return cart.findByIdAndDelete(cartId);
};

//update cart

const UpdateCart = async (cartId, updateBody) => {
    return cart.findByIdAndUpdate(cartId, { $set: updateBody });
}

module.exports = {
 CartCreate,
 CartList,
 CartId,
 DeleteCart,
 UpdateCart
}