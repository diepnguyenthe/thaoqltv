const Book = require("../model/Book");

const BookController = {
  create: async (req, res) => {
    try {
      const newBook = await Book.create(req.body);
      return res.status(200).json({
        message: "Success creation of leave",
        data: newBook,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error: error,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const bookId = req.params.id;
      await Book.findByIdAndRemove(bookId);
      return res.status(200).json({
        message: "Book deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error: error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const bookId = req.params.id;
      const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
        new: true,
      });
      return res.status(200).json({
        message: "Book updated successfully",
        data: updatedBook,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error: error,
      });
    }
  },

  get: async (req, res) => {
    try {
      const leaves = await Book.find();
      return res.status(200).json({
        message: "Success",
        data: leaves,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error: error,
      });
    }
  },

  getById: async (req, res) => {
    try {
      const bookId = req.params.id;
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).json({
          message: "Book not found",
        });
      }
      return res.status(200).json({
        message: "Success",
        data: book,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error: error,
      });
    }
  },
};

module.exports = BookController;
