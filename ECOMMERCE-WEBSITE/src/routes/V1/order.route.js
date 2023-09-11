const express = require("express");
const { OrderController  } = require("../../controllers");
const { OrderValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const routes = express.Router();

//create Order

routes.post("/createorder",
    validate(OrderValidation.CreateOrder),
    OrderController.CreateOrder
);

//Order list

routes.get("/orderlist",
    OrderController.OrderList
);

//Order id
routes.get("/orderlist/:orderId",
    OrderController.OrderId
);

//delete order

routes.delete("/deleteorder/:orderId",
     OrderController.DeleteOrder
);

//update order

routes.put("/updateorder/:orderId",
      OrderController.UpdateOrder
);

module.exports = routes;