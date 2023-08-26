const { HotelService } = require("../services");

// crate hotel

const CrateHotel = async (req, res) => {
    try {
        const reqBody = req.body;

        const hotel = await HotelService.CreateHotel(reqBody);

        if(!hotel){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{hotel}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

//Hotel list
const GetHotelList = async (req, res) => {
    try {
         const GetList = await HotelService.GetHotelList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Hotel list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

/** delete Hotel list  */

const DeleteHotel = async (req, res) => {
    try {
         const hotelid = req.params.hotelid;
         const hotelId = await HotelService.HotelId(hotelid);
         if (!hotelId) {
              throw new Error("Hotel Iteam Not Found....");
         }

         await HotelService.DeleteHotel(hotelid);

         res.status(200).json({
              success: true,
              message: "Hotel Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}

module.exports = {
    CrateHotel,
    GetHotelList,
    DeleteHotel

}