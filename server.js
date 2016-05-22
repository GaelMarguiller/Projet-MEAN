var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/blogmean');

require('./models/post');

var routes = require('./routes/api/post');
var users = require('./routes/api/user');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/', routes);
app.use('/users', users);




app.listen(3000, function() {
    console.log('Server is listening in port 3000');
});

module.exports = app;
