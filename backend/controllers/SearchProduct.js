const Product = require("../models/Product");

const searchProduct = async (req, res) => {
  try {
    let result = await Product.find({
      $or: [
        { name: { $regex: req.params.key } },
        { category: { $regex: req.params.key } },
      ],
    });
    res.send(result);
  } catch (error) {
    return res.status(422).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = searchProduct;
