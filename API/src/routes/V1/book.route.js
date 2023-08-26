const express = require("express");
const { BookController } = require("../../controllers");
const { BookValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const routes = express.Router();

// create book details

routes.post("/create-books",
       validate(BookValidation.Creatbook),
    BookController.CreateBook
)

// Get book list

routes.get("/booklist",
    BookController.GetbookList
)

/** delete book  */

routes.delete("/delete-book/:bookid",
    BookController.Deletebook
)
module.exports = routes;