const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    author: String,
    title: String,
    text: String,
    topics: [String],
});

module.exports = mongoose.model('Post', PostSchema);