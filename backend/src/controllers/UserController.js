const axios = require('axios');
const User = require('../models/user');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async store(req, res) {
        const { github_username, topics } = req.body;

        let user = await User.findOne({ github_username });

        // Se não existir poderá cadastrar
        if (!user) {
            //Pegar o usuário via api e cadastrar
            const apiRes = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url } = apiRes.data;

            const topicsArray = parseStringAsArray(topics);

            user = await User.create({
                name, 
                github_username,
                avatar_url,
                topicsArray, 
                fav,
            });
        }

        return res.json(user);
    },

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, request.body, {new: true});

        return res.json(user);
    },

    async destroy(req, res) {
        
        await user.findByIdAndRemove(req.params.id);

        return response.send('Usuário removido com sucesso!!!');
    },
};