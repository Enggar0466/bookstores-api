const {book} = require("../models");

class booksController {

    getAllBooksCtrl = async (req, res, next) => {
        try {
            const data = await book.findAll();
            next({ value: data, message: "OK", statusCode: 200 });
        } catch (error) {
          next(error);
        }
      };

      getBookByIdCtrl = async (req, res, next) => {
        try {

        } catch (error) {
          next(error);
        }
      };

      insertBookCtrl = async (req, res, next) => {
        try {

        } catch (error) {
          next(error);
        }
      };

      updateBookByIdCtrl = async (req, res, next) => {
        try {

        } catch (error) {
          next(error);
        }
      };

      deleteBookByIdCtrl = async (req, res, next) => {
        try {

        } catch (error) {
          next(error);
        }
      };
}

module.exports = new booksController();