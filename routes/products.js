const express = require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products');
const { validatorCreateProduct, validatorIdProduct, validatorUpdateProduct } = require('../validators/product');

const router = express.Router();

router.get("/", getProducts)

router.get("/:id", validatorIdProduct, getProduct)

router.post("/", validatorCreateProduct, createProduct)

router.put("/:id", validatorUpdateProduct, updateProduct)

router.delete("/:id", validatorIdProduct, deleteProduct)


//bla bla bla


module.exports = router
