const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/User');
const {
	registerValidation,
	loginValidation,
} = require('../validation');

//Register
router.post('/register', async (req, res) => {
	//Validate data
	const { error } = registerValidation(req.body);
	if (error)
		return res.status(400).send(error.details[0].message);

	//Checking if user already exist
	const emailExist = await User.findOne({
		email: req.body.email,
	});
	if (emailExist)
		return res.status(400).send('Email already exists');

	//Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(
		req.body.password,
		salt
	);

	//Create a new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
	});

	try {
		await user.save();
		res.send({ user: user._id });
	} catch (err) {
		res.status(400).send(err);
	}
});

//Login
router.post('/login', async (req, res) => {
	//Validate data
	const { error } = loginValidation(req.body);
	if (error)
		return res.status(400).send(error.details[0].message);

	//Checking if email exists
	const user = await User.findOne({
		email: req.body.email,
	});
	if (!user)
		return res
			.status(400)
			.send('Email or password is wrong');

	//Is password correct ?
	const validPassword = await bcrypt.compare(
		req.body.password,
		user.password
	);
	if (!validPassword)
		return res
			.status(400)
			.send('Email or password is wrong');

	//Create and assing a token
	const token = jwt.sign(
		{ _id: user._id },
		process.env.TOKEN_SECRET
	);
	res.header('token', token).json({ token });
});

module.exports = router;
