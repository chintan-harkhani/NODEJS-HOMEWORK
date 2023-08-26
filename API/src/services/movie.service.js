const { Movie } = require("../models");

//create Movie

const CreateMovie = async (reqBody) => {
    return Movie.create(reqBody);
}


/** get Movie list  */

const GetMovieList = async (req, res) => {
    return Movie.find();
  }

/** Get Movie id */
  const MovieId = async (movieid) => {
    return Movie.findById(movieid);
}

/** Delete Movie */

const  DeleteMovie = async (movieid) =>{
return  Movie.findByIdAndDelete(movieid);
}
module.exports = {
      CreateMovie,
      GetMovieList,
      MovieId,
      DeleteMovie
}