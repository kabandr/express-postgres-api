const Book = require("../models/bookModel");

const addBook = async (req, res, next) => {
  try {
    const addedBook = await new Book(req.body).save();
    res.status(201).json(addedBook);
  } catch (error) {
    next(error);
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const book = {
      title: req.body.title,
      author: req.body.author,
    };
    const id = req.params.id;
    await Book.update(book, { where: { id: id } });
    res.status(201).json(`Updated book: ${book.title}`);
  } catch (error) {
    next(error);
  }
};

const removeBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Book.destroy({ where: { id: id } });
    res.status(200).json("Book has been deleted.");
  } catch (error) {
    next(error);
  }
};

module.exports = { addBook, getAllBooks, getBookById, updateBook, removeBook };
