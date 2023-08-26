const { School } = require("../models");

//create school
const createSchool = async (reqBody) => {
    return School.create(reqBody);
}



/** get school list  */

const GetSchoolList = async (req, res) => {
    return School.find();
  }

/** Get school id */
  const SchoolId = async (schoolid) => {
    return School.findById(schoolid);
}

/** Delete school */

const  DeleteSchool  = async (schoolid) =>{
return  School.findByIdAndDelete(schoolid);
}
module.exports = {
   createSchool,
   GetSchoolList,
   DeleteSchool,
   SchoolId
}