let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema2 = new Schema({
    'name': {
        'type': String,
        'required': true
    },
    'title': {
        'type': String,
        'required': true
    },
    'body': {
        'type': String,
        'required': true
    },
    'timestamp': {
        'type': Date,
        'default': Date.now
    }
});

let Comment = mongoose.model('Comment', CommentSchema2);

module.exports = Comment;
