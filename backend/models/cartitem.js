// Importing the 'mongoose' library for MongoDB schema creation
const mongoose = require('mongoose');

// Destructuring assignment to extract the 'Schema' class from mongoose
const { Schema } = mongoose;

const cartSchema = new Schema({
     // Reference to the 'user' collection using ObjectId
  user:{
    type: Schema.Types.ObjectId,
    ref: 'user'

  },
  itemname: {
        type: String,
        required: true,
        unique:true
      },
      tag:{
        type: String,
        required: true,
      },
    price: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required:true,
      },
      quantity: {
        type: String,
        required:true,
      }
});
// Creating a model for the 'cart' collection based on the defined schema
const CartModel = mongoose.model('cart', cartSchema);
// Exporting the 'CartModel' for use in other parts of the app code
module.exports = CartModel;