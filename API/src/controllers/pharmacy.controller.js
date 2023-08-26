const { PharmacyService } = require("../services");

// crate pharmacy

const CreatePharmacy = async (req, res) => {
    try {
        const reqBody = req.body;

        const pharmacy = await PharmacyService.createPharmacy(reqBody);

        if(!pharmacy){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{pharmacy}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

//pharmacy list
const GetPharmacyList = async (req, res) => {
    try {
         const GetList = await PharmacyService.GetPharmacyList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Pharmacy list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

/** delete Pharmacy list  */

const Deletepharmacy = async (req, res) => {
    try {
         const pharmacyid = req.params.pharmacyid;
         const pharmacyIddel = await PharmacyService.PharmacyId(pharmacyid);
         if (!pharmacyIddel) {
              throw new Error("Pharmacys Iteam Not Found....");
         }

         await PharmacyService.DeletePharmacy(pharmacyid);

         res.status(200).json({
              success: true,
              message: "Pharmacy Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}
module.exports = {
    CreatePharmacy,
    GetPharmacyList,
    Deletepharmacy,
}