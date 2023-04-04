const express = require("express");
const {
  likeRes,
  unlikeRes,
  getLikeRes,
  getLikeUser,
  rateRes,
  getRateRes,
  getRateUser,
  createOrder,
} = require("../controller/restaurantController");

const resRouter = express.Router();

resRouter.post("/like-res", likeRes);
resRouter.post("/unlike-res", unlikeRes);
resRouter.post("/rate/:res_id", rateRes);
resRouter.post("/oder", createOrder);
resRouter.get("/like/:res_id", getLikeRes);
resRouter.get("/like/user/:user_id", getLikeUser);
resRouter.get("/rate/:res_id", getRateRes);
resRouter.get("/rate/user/:user_id", getRateUser);
module.exports = resRouter;
