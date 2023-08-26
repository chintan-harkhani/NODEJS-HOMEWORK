const { BusService } = require("../services");

//crate Bus

const CreateBus = async (req, res) => {
    try {
        const reqBody = req.body;

        const bus = await BusService.createBus(reqBody);

        if (!bus) {
            throw new Error("Someting is Wrong , Please  try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "Data successfully add ...",
            data: { bus }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

//bus list


const GetBusList = async (req, res) => {
    try {
         const GetList = await BusService.BusList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Bus passenger list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

/** delete Category list  */

const DeleteBus = async (req, res) => {
    try {
         const busid = req.params.busId;
         const busidfind = await BusService.BusId(busid);
         if (!busidfind) {
              throw new Error("Bus Iteam Not Found....");
         }

         await BusService.DeleteBus(busid);

         res.status(200).json({
              success: true,
              message: "Bus Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}
module.exports = {
    CreateBus,
    GetBusList,
    DeleteBus,
}