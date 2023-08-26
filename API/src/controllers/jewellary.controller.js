const { JewelleryService } = require("../services");

// crate jewellary

const CreateJewellery = async (req, res) => {
    try {
        const reqBody = req.body;

        const jewellary = await JewelleryService.CreateJewellery(reqBody);

        if(!jewellary){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{jewellary}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

//jewellary list
const GetJewellaryList = async (req, res) => {
    try {
         const GetList = await JewelleryService.GetJewellaryList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Jewellary list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

/** delete jewellary list  */

const DeleteJewellary = async (req, res) => {
    try {
         const jewellaryid = req.params.jewellaryid;
         const jewellarydelid = await JewelleryService.JewelleryId(jewellaryid);
         if (!jewellarydelid) {
              throw new Error("Jewellary Iteam Not Found....");
         }

         await JewelleryService.DeleteJewellary(jewellaryid);

         res.status(200).json({
              success: true,
              message: "Jewellary Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}
module.exports = {
     CreateJewellery,
     GetJewellaryList,
     DeleteJewellary
}
