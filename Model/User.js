var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:  String,
    password: String,
    profileImageUrl:   String,
    updated: { type: Date, default: Date.now },
    saved: { type: Date, default: Date.now }
});

var User = mongoose.model('user', userSchema);

module.exports = User;