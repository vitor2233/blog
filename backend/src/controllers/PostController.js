const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const post = Post.find();

        return res.json(post);
    },

    async store(req, res) {
        post = await Post.create({
            author,
            title,
            text,
            topics,
        });

        return res.json(post);
    },

    async update(req, res) {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(post);
    },

    async destroy(req, res) {
        await Post.findByIdAndRemove(req.params.id);

        return res.send();
    },
};
