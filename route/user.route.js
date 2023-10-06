const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/user.controller");

// /api/user/create
userRouter.post("/create", userController.create);

module.exports = userRouter;
