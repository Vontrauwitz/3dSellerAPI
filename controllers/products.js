const { matchedData } = require('express-validator');
const { ProductsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');


/**
 * obtain list from dataBase
 * @param {*} req
 * @param {*} res
 */


const getProducts = async (req, res) => {

  try {

    const data = await ProductsModel.find({});
    res.send({ data });
  } catch (error) {
    // console.log(error);
    handleHttpError(res, "ERROR_GET_PRODUCTS");
  };
};


/**
 * obtain detail from dataBase
 * @param {*} req
 * @param {*} res
 */
const getProduct = (req, res) => { }


/**
 * insert a record
 * @param {*} req
 * @param {*} res
 */
const createProduct = async (req, res) => {
  try {
    const body = matchedData(req)
    // console.log("🚀 ~ file: products.js:30 ~ createProduct ~ body", body)
    const data = await ProductsModel.create(body)
    res.send({ data })
  } catch (error) {
    // console.log(error);
    handleHttpError(res, "ERROR_POST_PRODUCT");


  }
}


/**
 * update a record
 * @param {*} req
 * @param {*} res
 */
const updateProduct = (req, res) => { }


/**
 * delete a record
 * @param {*} req
 * @param {*} res
 */
const deleteProduct = (req, res) => { }




module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct }
