const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

//Import Routes
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/products');
const userRoute = require('./routes/user');
const unnamedRoute = require('./routes/unnamed');



//Middlewares
app.use(express.json());
app.use(cors());

//Route Middlewares
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/db', productsRoute);
app.use('/api', unnamedRoute);

const port = process.env.PORT;

//Connect DB
mongoose.connect(
	process.env.MONGO_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	() => {
		console.log('Connected to DB');
	}
);

app.listen(port, () =>
	console.log(`App listening from: http://localhost:${port}`)
);
