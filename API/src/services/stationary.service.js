const { Stationary } = require("../models");

//Stationary create

const CreateStationary = async (reqBody) => {
    return Stationary.create(reqBody);
}



/** get Stationary list  */

const GetStationaryList = async (req, res) => {
    return Stationary.find();
  }

/** Get Stationary id */
  const StationaryId = async (stationaryid) => {
    return Stationary.findById(stationaryid);
}

/** Delete Stationary */

const  DeleteStationary  = async (stationaryid) =>{
return  Stationary.findByIdAndDelete(stationaryid);
}
module.exports = {
   CreateStationary,
   GetStationaryList,
   StationaryId,
   DeleteStationary,
}