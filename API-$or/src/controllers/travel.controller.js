const  {TravelService} = require("../services");


// crate travel

const CreateTravel = async (req, res) => {
    try {
        const reqBody = req.body;

        const Travel = await TravelService.createTravel(reqBody);

        if(!Travel){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{Travel}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

//travel list
const GetTravelList = async (req, res) => {
    try {
         const GetList = await TravelService.TravelList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Travel list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}


/** delete Travel list  */

const DeleteTravel = async (req, res) => {
    try {
         const travelId = req.params.travelid;
         const traveldel = await TravelService.TravelId(travelId);
         if (!traveldel) {
              throw new Error("Travel Iteam Not Found....");
         }

         await TravelService.DeleteTravel(travelId);

         res.status(200).json({
              success: true,
              message: "Travel Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}
module.exports ={
    CreateTravel,
    GetTravelList,
    DeleteTravel
}