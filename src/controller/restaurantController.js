const { successCode, failCode, errCode } = require("../config/response");
const sequelize = require("../model/index");

const initModels = require("../model/init-models");

const model = initModels(sequelize);

const likeRes = async (req, res) => {
  try {
    const { user_id, res_id } = req.query;

    let new_model = {
      user_id,
      res_id,
      date_like: Date.now(),
    };

    await model.like_res.create(new_model);
    successCode(res, new_model, "Like_Res create");
  } catch (error) {
    failCode(res, error);
  }
};

const unlikeRes = async (req, res) => {
  try {
    const { user_id, res_id } = req.query;

    const like = await model.like_res.findOne({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });

    if (!like) {
      // Nếu không tìm thấy bản ghi, trả về lỗi
      errCode(res, like, "Không tìm thấy người dùng like nhà hàng này");
    } else {
      // Nếu tìm thấy bản ghi, xóa nó khỏi database
      await like.destroy();
      successCode(res, like, "Unlike thành công");
    }
  } catch (error) {
    failCode(res, error);
  }
};

const getLikeRes = async (req, res) => {
  const { res_id } = req.params;

  try {
    let data = await model.like_res.findAll({
      where: { res_id },
      include: ["user"],
    });

    successCode(res, data, "likes");
  } catch (error) {
    failCode(res, error);
  }
};

const getLikeUser = async (req, res) => {
  const { user_id } = req.params;

  try {
    let data = await model.like_res.findAll({
      where: { user_id },
      include: ["re"],
    });
    successCode(res, data, "likes");
  } catch (error) {
    failCode(res, error);
  }
};

const rateRes = async (req, res) => {
  try {
    const { res_id } = req.params;
    const { user_id, amount } = req.body;

    const new_model = {
      user_id,
      res_id,
      amount,
      date_rate: Date.now(),
    };

    await model.rate_res.create(new_model);

    successCode(res, new_model, "Thêm đánh giá thành công ");
  } catch (error) {
    failCode(res, error);
  }
};

const getRateRes = async (req, res) => {
  const { res_id } = req.params;

  try {
    let data = await model.rate_res.findAll({
      where: { res_id },
      include: ["user"],
    });

    successCode(res, data, "likes");
  } catch (error) {
    failCode(res, error);
  }
};

const getRateUser = async (req, res) => {
  const { user_id } = req.params;

  try {
    let data = await model.rate_res.findAll({
      where: { user_id },
      include: ["re"],
    });
    successCode(res, data, "likes");
  } catch (error) {
    failCode(res, error);
  }
};

const createOrder = async (req, res) => {
  try {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;

    const newOrder = {
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    };

    await model.order.create(newOrder);
    successCode(res, newOrder, "Thêm Order thành công");
  } catch (error) {
    failCode(res, error.message);
  }
};
module.exports = {
  likeRes,
  unlikeRes,
  getLikeRes,
  getLikeUser,
  rateRes,
  getRateRes,
  getRateUser,
  createOrder,
};
