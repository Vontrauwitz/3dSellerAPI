const express = require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products');
const { validatorCreateProduct } = require('../validators/product');

const router = express.Router();

router.get("/", getProducts)

router.get("/", getProduct)

router.post("/", validatorCreateProduct, createProduct)

router.put("/", updateProduct)

router.delete("/", deleteProduct)


//bla bla bla


module.exports = router
