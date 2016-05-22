
var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    content: String,
    created : {type : Date, default : Date.now },
    user : mongoose.Schema.Types.ObjectId
});

var commentSchema = new mongoose.Schema({
    title: String,
    content: String,
    user : mongoose.Schema.Types.ObjectId,
    created : { type: Date, default: Date.now }
});



var Comment = mongoose.model('comments', commentSchema);
var Post = mongoose.model('Post', postSchema);


module.exports = Post, Comment;