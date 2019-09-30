var express = require('express');
var mongoose = require('mongoose');
var app = express();
const bodyParser = require('body-parser');

var db = require('./configuration/database.config');
mongoose.Promise = global.Promise;
mongoose.connect(db.url, {

    useNewUrlParser: true
}).then(() => {
    console.log('successfully connected to the database');

}).catch(err => {

    console.log('could not connect to the database', err);
    process.exit();
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

require('./route/user.routes')(app);

app.listen('4000', () => {

    console.log('server listening on the port 4000');
});