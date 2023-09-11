const { CartService} = require("../services");

//create Category

const CreateCart= async (req, res) => {
    try {
        const reqBody = req.body;

        const cart = await CartService.CartCreate(reqBody);
        if (!cart) {
            throw new Error("cart Not Created , Please try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully cart Created!...",
            data: { cart }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//cart list
const CartList = async (req, res) => {
    try {
        const list = await CartService.CartList(req, res);

        res.status(200).json({
            success: true,
            message: " Cart Data SuccessFully Get !.....",
            data: { list }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//get cart id

const CartId = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const ID = await CartService.CartId(cartId);

        if (!ID) {
            throw new Error("Cart Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Cart List Get!....",
            data: { ID }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete Cart

const DeleteCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const ID = await CartService.CartId(cartId);
        if (!ID) {
            throw new Error("cart Not Found !...");
        };
        await CartService.DeleteCart(cartId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Cart Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update cart

const UpdateCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const ID = await CartService.CartId(cartId);
        if (!ID) {
            throw new Error("cart Not Found !...");
        };
        await CartService.UpdateCart(cartId, req.body);

        res.status(200).json({
            success: true,
            message: "cart details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
     CreateCart,
     CartList,
     CartId,
     DeleteCart,
     UpdateCart
}