const express = require("express");
const router = express.Router();
const {
  addBook,
  getAllBooks,
  updateBook,
  removeBook,
  getBookById,
} = require("./controllers/bookController");

router.post("/books", addBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", updateBook);
router.delete("/books/:id", removeBook);

module.exports = router;