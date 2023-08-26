const { School } = require("../models");

//create school
const createSchool = async (reqBody) => {
    return School.create(reqBody);
}



/** get school list  */

const GetSchoolList = async (req, res) => {
    return School.find({$or: [{is_active : true ,school_type : "Privete"}]});
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