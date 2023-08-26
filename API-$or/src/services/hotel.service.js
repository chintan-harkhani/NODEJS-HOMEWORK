const { Hotel } = require("../models");

// create hotel

const CreateHotel = async (reqBody) => {
    return Hotel.create(reqBody);
}

/** get Hotel list  */

const GetHotelList = async (req, res) => {
    return Hotel.find({$or:[{is_active : true , }]});
  }

/** Get Hotel id */
  const HotelId = async (hotelid) => {
    return Hotel.findById(hotelid);
}
/** Delete Hotel */

const  DeleteHotel  = async (hotelid) =>{
    return  Hotel.findByIdAndDelete(hotelid);
    }

    module.exports = {
        CreateHotel,
        GetHotelList,
        HotelId,
        DeleteHotel
    }