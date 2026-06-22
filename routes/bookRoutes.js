const express = require("express");
const router = express.Router();

const controller = require("../controllers/bookController");

router.get("/", controller.getBooks);

router.get("/add", controller.addPage);
router.post("/add", controller.addBook);

router.get("/edit/:id", controller.editPage);
router.post("/edit/:id", controller.updateBook);

router.get("/delete/:id", controller.deleteBook);

router.get("/details/:id", controller.getBookDetails);

module.exports = router;