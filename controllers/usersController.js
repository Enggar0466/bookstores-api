const { user } = require("../models");

class usersController {
  getAllUsersCtrl = async (req, res, next) => {
    try {
      const data = await user.findAll();
      next({ value: data, message: "OK", statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };

  getUsersByIdCtrl = async (req, res, next) => {
    try {
      const data = await user.findOne({
        where: {
          id: req.params.id,
        },
      });
      next({ value: data, message: "OK", statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };

  insertUsersCtrl = async (req, res, next) => {
    try {
      const name = req.body.name;
      const age = req.body.age;
      const data = await user.create({
        name: name,
        age: age,
      });
      next({ value: data, message: "OK", statusCode: 200 });
    } catch (error) {
      next(error);
    }
  };

  updateUsersByIdCtrl = async (req, res, next) => {
    try {
      const data = await user.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (data) {
        const update = await user.update(
          {
            name: req.body.name,
            age: req.body.age,
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

  deleteUsersByIdCtrl = async (req, res, next) => {
    try {
      const data = await user.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (data) {
        const hapus = await user.destroy({
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

module.exports = new usersController();
