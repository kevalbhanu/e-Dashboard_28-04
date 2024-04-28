const Product = require("../models/Product");

const updateProduct = async (req, res) => {
  try {
    let result =await Product.updateOne(
      { _id: req.params.id },
      {
        $set: req.body
      }
    );
    res.send(result);
  } catch (error) {
    return res.status(422).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = updateProduct;
