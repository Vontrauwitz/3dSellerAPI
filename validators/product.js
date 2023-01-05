const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator')

const validatorCreateProduct = [

  check("name")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 30 }),
  check("description")
    .exists()
    .notEmpty(),
  // .isLength({ min: 4, max: 30 }),
  check("price")
    .exists()
    .notEmpty(),
  check("image")
    .optional(),
  check("stock")
    .exists()
    .notEmpty(),
  check("category")
    .optional(),

  (req, res, next) => {
    return validateResults(req, res, next);
  },
];


//todo recordar meter patch y modificar el validador del put
const validatorUpdateProduct = [

  check("name")
    .optional(),
  check("description")
    .optional(),
  check("price")
    .optional(),
  check("image")
    .optional(),
  check("stock")
    .optional(),
  check("category")
    .optional(),

  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorIdProduct = [

  check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

module.exports = { validatorCreateProduct, validatorIdProduct, validatorUpdateProduct }
