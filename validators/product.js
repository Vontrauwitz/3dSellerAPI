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

module.exports = { validatorCreateProduct }
