const mongoose = require("mongoose");

const pluginSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
  },
  links: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('Plugin', pluginSchema);