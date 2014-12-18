
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Scheme
var productScheme = new mongoose.Schema({
  name: String,
  sku: String,
  price: Number
})

// Return Model
module.exports = restful.model('Products', productScheme);
