const { Music } = require("../models");

// create music


const createMusic = async (reqBody) => {
    return Music.create(reqBody);
}



/** get music list  */

const GetMusicList = async (req, res) => {
    return Music.find();
  }

/** Get Music id */
  const MusicId = async (musicid) => {
    return Music.findById(musicid);
}

/** Delete Music */

const  DeleteMusic  = async (musicid) =>{
return  Music.findByIdAndDelete(musicid);
}
module.exports = {
     createMusic,
     GetMusicList,
     MusicId,
     DeleteMusic
}