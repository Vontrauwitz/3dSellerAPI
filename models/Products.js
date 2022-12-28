const mongoose = require('mongoose')

const ProductsScheme = new mongoose.Schema(
  {
    name: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    stock: {
      type: Number,
    },
    image: {
      type: String,
    },
    category: {
      type: ["none", "figure", "mate cup", "world cup", "clothes", "mobile", "anime", "other"],
      default: 'other'
    }
  },
  {
    timestamps: true,
    version: false
  }
)

module.exports = mongoose.model('Products', ProductsScheme)
