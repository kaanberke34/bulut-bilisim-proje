const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	title: String,
	price: Number,
	image: String,
	imgURLs: [{ type: String }],
	description: String,
	options: [{ type: String }],
});

module.exports = mongoose.model('Product', productSchema);
