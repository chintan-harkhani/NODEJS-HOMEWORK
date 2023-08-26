const  {GroceryService} = require("../services");

// crate  Grocery

const CreateGrocery = async (req, res) => {
    try {
        const reqBody = req.body;

        const grocery = await GroceryService.Creategrocery(reqBody);

        if(!grocery){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{grocery}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}


//grocery list
const GetGroceryList = async (req, res) => {
    try {
         const GetList = await GroceryService.GetGrocerylist(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Grocery list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}
/** delete Grocery list  */

const Deletegrocery = async (req, res) => {
    try {
         const groceryid = req.params.groceryid;
         const grocerydelid = await GroceryService.GroceryId(groceryid);
         if (!grocerydelid) {
              throw new Error("Grocery Iteam Not Found....");
         }

         await GroceryService.DeleteGrocery(groceryid);

         res.status(200).json({
              success: true,
              message: "Grocery Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}
module.exports ={
    CreateGrocery,
    GetGroceryList,
    Deletegrocery
}