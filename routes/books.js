const router = require("express").Router();

const {
    getAllBooksCtrl,
    getBookByIdCtrl,
    insertBookCtrl,
    updateBookByIdCtrl,
    deleteBookByIdCtrl,
    } = require("../controllers/booksController")

router.get("/", getAllBooksCtrl);
router.get("/:id",getBookByIdCtrl)
router.post("/", insertBookCtrl);
router.put("/:id", updateBookByIdCtrl)
router.delete("/:id", deleteBookByIdCtrl)


module.exports = router;
