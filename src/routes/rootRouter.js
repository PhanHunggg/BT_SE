const express = require("express");

const resRouter = require("./restaurantRouter");


const rootRouter = express.Router();

rootRouter.use("/res", resRouter);

module.exports = rootRouter;
