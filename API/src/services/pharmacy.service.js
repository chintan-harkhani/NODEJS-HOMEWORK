const { Pharmacy } = require("../models");

//create Pharmacy

const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody);
}



/** get Pharmacy list  */

const GetPharmacyList = async (req, res) => {
    return Pharmacy.find();
  }

/** Get Pharmacy id */
  const PharmacyId = async (pharmacyid) => {
    return Pharmacy.findById(pharmacyid);
}

/** Delete Pharmacy */

const  DeletePharmacy  = async (pharmacyid) =>{
return  Pharmacy.findByIdAndDelete(pharmacyid);
}
module.exports = {
    createPharmacy,
    GetPharmacyList,
    PharmacyId,
    DeletePharmacy
}