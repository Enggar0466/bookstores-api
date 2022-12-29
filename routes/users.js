const router = require("express").Router();

const {
  getAllUsersCtrl,
  getUsersByIdCtrl,
  insertUsersCtrl,
  updateUsersByIdCtrl,
  deleteUsersByIdCtrl,
} = require("../controllers/usersController");

router.get("/", getAllUsersCtrl);
router.get("/:id", getUsersByIdCtrl);
router.post("/", insertUsersCtrl);
router.put("/:id", updateUsersByIdCtrl);
router.delete("/:id", deleteUsersByIdCtrl);

module.exports = router;
