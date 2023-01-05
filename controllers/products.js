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
const getProduct = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await ProductsModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_PRODUICT")

  }
}


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
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...body } = matchedData(req)
    // console.log("🚀 ~ file: products.js:30 ~ createProduct ~ body", body)
    const data = await ProductsModel.findOneAndUpdate(id, body)
    res.send({ data })
  } catch (error) {
    // console.log(error);
    handleHttpError(res, "ERROR_POST_PRODUCT");
  }
}


/**
 * delete a record
 * @param {*} req
 * @param {*} res
 */
const deleteProduct = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req //! aqui llega
    console.log(id)
    const data = await ProductsModel.deleteOne({ _id: id })
    res.send({ data })
    console.log("🚀 ~ file: products.js:93 ~ deleteProduct ~ data", data)
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_DELETE_PRODUCT")
  }
}



module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct }
