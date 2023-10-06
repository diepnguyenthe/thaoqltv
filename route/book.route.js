const express = require("express");
const bookRouter = express.Router();
const userMiddleware = require("../middleware/user.middleware");
const bookController = require("../controller/book.controller");
// api/book/create
bookRouter.post("/create", userMiddleware.isAdmin, bookController.create);

module.exports = bookRouter;
