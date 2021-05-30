const router = require('express').Router();

//Hello world Route
router.get('/', (_, res) => {
	res.send("Malice api'ye hos geldiniz..");
});

module.exports = router;
