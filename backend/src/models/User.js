const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    github_username: String,
    avatar_url: String,
    topics: [String],
    fav: [String]
});

module.exports = mongoose.model('User', UserSchema);