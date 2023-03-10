const { book } = require("../models");

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
      const data = await book.findOne({
        where: {
          id: req.params.id,
        },
      });
      next({ value: data, message: "OK", statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };

  insertBookCtrl = async (req, res, next) => {
    try {
      const title = req.body.title;
      const author = req.body.author;
      const page = req.body.page;
      const genre = req.body.genre;
      const description = req.body.description;
      const data = await book.create({
        title: title,
        author: author,
        page: page,
        genre: genre,
        description: description,
      });
      next({ value: data, message: "OK", statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };

  updateBookByIdCtrl = async (req, res, next) => {
    try {
      const data = await book.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (data) {
        const update = await book.update(
          {
            title: req.body.title,
            author: req.body.author,
          },
          {
            where: { id: data.id },
          }
        );
      }
      if (!data) {
        next({
          value: data,
          message: "id not ada",
          error: "Not Found",
          statusCode: 404,
        });
      }
      next({ value: true, message: "OK", statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };

  deleteBookByIdCtrl = async (req, res, next) => {
    try {
      const data = await book.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (data) {
        const hapus = await book.destroy({
          where: { id: data.id },
        });
      }
      if (!data) {
        next({
          value: data,
          message: "id not ada",
          error: "Not Found",
          statusCode: 404,
        });
      }
      next({ value: true, message: "OK", statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new booksController();
