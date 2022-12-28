const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: 'user'
    }
  },
  {
    timestamps: true,
    version: false
  }
)

module.exports = mongoose.model('Users', UserScheme)
