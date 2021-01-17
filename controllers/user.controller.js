const UserService = require('../services/user.services')
const User = require('../models/user.model')

exports.register = async function (req, res) {
    const newUser = new User(req.body);
    console.log('register', newUser);
    await UserService.register(newUser, res);
}

exports.login = async function (req, res) {
    await UserService.login(req, res);
}

exports.logout = async function (req, res) {
    req.user.deleteToken(req.token, (err, user) => {
        if (err) return res.status(400).send(err);
        res.sendStatus(200);
    });
}

exports.profile = async function (req, res) {
    res.json({
        isAuth: true,
        id: req.user._id,
        username: req.user.username,
    })
}
