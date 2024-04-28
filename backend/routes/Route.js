const login = require("../controllers/LoginController");
const register = require("../controllers/RegisterController");
const express = require("express");
const product = require("../controllers/ProductController");
const products = require("../controllers/ProductsList");
const deleteProduct = require("../controllers/DeleteProduct");
const getUpdateProduct = require("../controllers/GetUpdateProduct");
const updateProduct = require("../controllers/UpdateProduct");
const searchProduct = require("../controllers/SearchProduct");

let router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/add-product", product);
router.get("/products", products);
router.delete("/product/:id", deleteProduct);
router.get("/product/:id", getUpdateProduct);
router.put("/product/:id",updateProduct);
router.get("/search/:key",searchProduct)

module.exports = router;
