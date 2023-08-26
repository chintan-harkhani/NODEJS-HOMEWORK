const { MovieService } = require("../services");

// crate  Movie

const createMovie = async (req, res) => {
    try {
        const reqBody = req.body;

        const movie = await MovieService.CreateMovie(reqBody);

        if(!movie){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{movie}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

//movie list
const GetmovieList = async (req, res) => {
    try {
         const GetList = await MovieService.GetMovieList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Movies list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

/** delete Movie list  */

const DeleteMovie = async (req, res) => {
    try {
         const movieid = req.params.movieid;
         const movieIdDel = await MovieService.MovieId(movieid);
         if (!movieIdDel) {
              throw new Error("Movies Iteam Not Found....");
         }

         await MovieService.DeleteMovie(movieid);

         res.status(200).json({
              success: true,
              message: "Movie Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}
module.exports = {
     createMovie,
     GetmovieList,
     DeleteMovie
}