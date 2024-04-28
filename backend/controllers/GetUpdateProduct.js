const Products = require("../models/Product");

const getUpdateProduct = async (req, res) => {
  try {
    let result = await Products.findOne({ _id: req.params.id });
    res.send(result ? result : { result: "No Record Found" });
  } catch (error) {
    return res.status(422).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = getUpdateProduct;
