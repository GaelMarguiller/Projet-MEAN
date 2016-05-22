var mongoose = require('mongoose');
var faker = require ('faker');
var User = require('../models/user.js');
var Post = require('../models/post.js');


//Connect to BDD
mongoose.connect('mongodb://localhost/blogmean', function(err){
    if (err) { throw err;}
});

var userArray = [];
var postArray = [];

//Create a user


for(var j = 0; j< 5; j++) {
    var user = new User ({
        username: faker.internet.userName(),
        password: faker.internet.password(),
        profileImageUrl: faker.image.imageUrl(),
        updated: faker.date.recent(),
        saved: faker.date.recent()
    });
    userArray.push(user);

//Flush to BDD
    user.save(function (err) {
        if (err) { throw err; }

    });
    console.log('User successfully registered');
}

//Pick a random user in array

var pickRandomUser = function () {
    var pickUser = userArray[Math.floor(Math.random() * 4)];
    return pickUser;

};

//Generating a Post with a random user -> select a name.

var randomComment = function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

for(var i = 0; i < 21;i++){
    var post = new Post({
        title : faker.lorem.sentence(),
        imageUrl : faker.image.imageUrl(),
        content : faker.lorem.paragraphs(),
        created : faker.date.recent(),
        user : pickRandomUser()

    });
    for(var l = 0; l <= randomComment(0,5);l++){
        var comment = new Post({
            title : faker.lorem.words(),
            content : faker.lorem.sentence(),
            user: pickRandomUser(),
            created : faker.date.recent()
        });
        comment.save(function (err) {
            if (err) { throw err; }

        });
    postArray.push(post._id);
    //Save Post in BDD
    post.save(function (err) {
        if (err) { throw err; }

    });
    console.log('post add with success');
}}

//Create Comments for every Posts, and random 0 to 5 comments on it.

//Flush Comments in BDD

comment.save(function (err) {
    if (err) { throw err; }
    console.log('post add with success');
});
