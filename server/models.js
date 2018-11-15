var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productDb');
    var productSchema = new mongoose.Schema({
        title: {type: String, required: true, minlength: 4},
        price: {type: Number, required: true},
        image: {type: String}
    }, {timestamps:true});

    mongoose.model('product', productSchema);
    var product = mongoose.model('product');

module.exports = product