const router = require('express').Router();
const verify = require('../Middleware/verifyToken');

const Product = require('../model/Product');

router.post('/products', verify, async (req, res) => {
	const product = new Product({
		title: req.body.title,
		price: req.body.price,
		image: req.body.image,
		imgURLs: req.body.imgURLs,
		description: req.body.description,
		options: req.body.options,
	});

	try {
		const savedProduct = await product.save();
		res.send(savedProduct);
	} catch (err) {
		res.status(400).json({ error: err });
	}
});
router.post('/product' ,async (req, res) => {
	try {
		const product = await Product.findById({ _id: req.body._id });
		res.json(product)
	} catch (err) {
		res.status(400).json({ error: "Something Went Wrong" });
	}
});

router.get('/products', async (_, res) => {
	const products = await Product.find();
	res.json(products);
});

module.exports = router;
