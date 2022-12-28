const mongoose = require('mongoose')

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String
    },
    filename: {
      type: String,
    }
  },
  {
    timestamps: true,
    version: false
  }
)

module.exports = mongoose.model('Storage', StorageScheme)