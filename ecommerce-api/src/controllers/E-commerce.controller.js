const { bookservice , userservice ,categoryservice} = require("../services");


/**   Get Ecommerce data  list  */

const GetEcommerceList = async (req, res) => {
    try {
         const GetList1 = await bookservice.GetBookList(req, res);
         const GetList2 =  await userservice.getuserlist(req ,res);
         const GetList3 = await categoryservice.GetCategoryList(req,res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Ecommerce data list Get.....",
              data: {
                   GetList1,
                   GetList2,
                   GetList3
              }
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {GetEcommerceList};