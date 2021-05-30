const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/User');
const { updateValidation } = require('../validation');

//get User
router.get('/getUser', async (req, res) => {
	const token = req.header('token');
	if (!token) return res.status(401).json({ error: 'Unauthenticated' });
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		//Find user
		const user = await User.findOne({ _id: verified._id });
		res.status(200).json({ user });
	} catch (err) {
		res.status(400).json({ error: 'Invalid Token' });
	}
});

//Update User
router.post('/updateUser', async (req, res) => {
	const token = req.header('token');
	if (!token) return res.status(401).json({ error: 'Unauthenticated' });

	//Verify token
	const verified = jwt.verify(token, process.env.TOKEN_SECRET);
	if (!verified) return res.status(401).json({ error: 'Unauthenticated' });

	//Verify req
	const { error } = updateValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	let updatedUser = {};
	//Hash password
	let hashedPassword;
	if (req.body.password) {
		const salt = await bcrypt.genSalt(10);
		hashedPassword = await bcrypt.hash(req.body.password, salt);
		updatedUser.password = hashedPassword;
	}
	if (req.body.name) updatedUser.name = req.body.name;
	if (req.body.email) updatedUser.email = req.body.email;

	try {
		const newUser = await User.findOneAndUpdate(
			{ _id: verified._id },
			updatedUser,
		);
		res.send(newUser);
	} catch (err) {
		console.log(err);
		res.status(400).json({ error: 'Something went wrong' });
	}
});

module.exports = router;
