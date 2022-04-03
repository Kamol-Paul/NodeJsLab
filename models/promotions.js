const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let promotionSchema = new Schema({
   name: {type: String , required: true},
   description: {type: String , required: true},
   image: {type: String , required: true},
   label: {type: String , required: true},
   price: {type: Number , required: true},
   freatured: {type: Boolean , default: true},
},
{
    timestamps: true
  });
let promotions = mongoose.model('promotion', promotionSchema);
module.exports = promotions;