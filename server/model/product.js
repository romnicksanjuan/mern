const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    data:Buffer,
    contentType:String,
    price:{
        type:Number,
        required:true
    },
    // category:{
    //     type:String
    // }
});

module.exports = mongoose.model('products', productSchema)