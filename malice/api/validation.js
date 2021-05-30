const Joi = require('joi');

//Register Validation
const registerValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(2).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	});

	return schema.validate(data);
};

//Login Validation
const loginValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	});

	return schema.validate(data);
};

const updateValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(2),
		email: Joi.string().min(6).email(),
		password: Joi.string().min(6),
	});

	return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.updateValidation = updateValidation;
