const login = require("../controllers/LoginController");
const register = require("../controllers/RegisterController");
const express = require("express");
const product = require("../controllers/ProductController");
const products = require("../controllers/ProductsList");
const deleteProduct = require("../controllers/DeleteProduct");
const getUpdateProduct = require("../controllers/GetUpdateProduct");
const updateProduct = require("../controllers/UpdateProduct");
const searchProduct = require("../controllers/SearchProduct");
const verifyToken = require("../middleware/TokenValidator");

let router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/add-product", verifyToken, product);
router.get("/products", verifyToken, products);
router.delete("/product/:id", verifyToken, deleteProduct);
router.get("/product/:id", verifyToken, getUpdateProduct);
router.put("/product/:id", verifyToken, updateProduct);
router.get("/search/:key", verifyToken, searchProduct);

module.exports = router;
