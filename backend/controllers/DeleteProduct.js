const Product = require("../models/Product");

const deleteProduct = async (req, res) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    return res.status(422).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = deleteProduct;
