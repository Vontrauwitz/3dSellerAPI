require('dotenv').config()
const productsData = require('../data/products')
const connectDB = require('../config/mongo')
const products = require('../models/Products')

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log("Data import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1)
  };
};

importData();
