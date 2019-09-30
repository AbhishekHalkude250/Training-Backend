const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const dbcofig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbcofig.url, {
	useNewUrlParser: true
	
}).then(() => {

console.log("successfully conneted to the database");
}).catch(err => {

	console.log("could not connected to the database. existing now ...", err);
	process.exit();

})


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




app.get('/', (req, res) => {
    res.json({"message": "Welcome to username application. Take user quickly. Organize and keep track of all your users."});
});


require('./app/routes/username.routes')(app);
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

