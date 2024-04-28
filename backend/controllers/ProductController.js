const Product = require("../models/Product");

const product = async (req, res) => {
  try {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
  } catch (error) {
    return res.status(422).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = product;
