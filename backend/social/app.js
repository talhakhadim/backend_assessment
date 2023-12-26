const express = require('express');
const { initProducer } = require('./utilities/producer');
const { db } = require("./database/models");
const Routes = require("./src/routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', Routes);

app.use('/', async (req, res) => {

	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});

//connect to database
db.sequelize
  .sync({ force: false })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(`Database connection error: ${err.message}`));

app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});