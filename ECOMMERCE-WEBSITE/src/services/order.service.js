const { order } = require("../models");

//create Order

const OrderCreate = async (reqBody) => {
    return (await (await (await order.create(reqBody)).populate("User")).populate("product")).populate("cart");
};

//list order

const OrderList = async (req, res) => {
    return order.find(
        // {$or :[{is_active : true}]}
    ).populate("User").populate("product").populate("cart")
};

// get order id

const OrderId = async (orderId) => {
    return order.findById(orderId);
};

//delete order

const DeleteOrder = async (orderId) => {
    return order.findByIdAndDelete(orderId);
};

//update order

const UpdateOrder = async (orderId, updateBody) => {
    return order.findByIdAndUpdate(orderId, { $set: updateBody });
}

module.exports = {
 OrderCreate,
 OrderList,
 OrderId,
 DeleteOrder,
 UpdateOrder
}