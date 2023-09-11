const { OrderService } = require("../services");

//create product

const CreateOrder = async (req, res) => {
    try {
        const reqBody = req.body;

        const Order = await OrderService.OrderCreate(reqBody);
        if (!Order) {
            throw new Error("Order Not Created , Please try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully Order Created!...",
            data: { Order }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Order list
const OrderList = async (req, res) => {
    try {
        const list = await OrderService.OrderList(req, res);

        res.status(200).json({
            success: true,
            message: " Order Data SuccessFully Get !.....",
            data: { list }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//get Orderid

const OrderId = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const ID = await OrderService.OrderId(orderId);

        if (!ID) {
            throw new Error("Order Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Order List Get!....",
            data: { ID }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete Order

const DeleteOrder= async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const ID = await OrderService.OrderId(orderId);
        if (!ID) {
            throw new Error("Order Not Found !...");
        };

        await OrderService.DeleteOrder(orderId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Order Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update Order

const UpdateOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const ID = await OrderService.OrderId(orderId);
        if (!ID) {
            throw new Error("Order Not Found !...");
        };
        await OrderService.UpdateOrder(orderId, req.body);

        res.status(200).json({
            success: true,
            message: "Order details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
CreateOrder,
OrderList,
OrderId,
DeleteOrder,
UpdateOrder
}