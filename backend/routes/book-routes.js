const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controllers');
const verifyToken = require('../middleware/verifyToken');


router.get("/", bookController.getAllBooks);
router.post("/add", verifyToken, bookController.createBook);
router.get("/:bookId", bookController.getBookById);
router.put("/:bookId", verifyToken, bookController.updateBook);
router.delete('/:bookId', verifyToken, bookController.deleteBook);

module.exports = router;
