const User = require('../models/user.model')

exports.login = async function (req, res) {
    let token = req.cookies.auth;
    User.findByToken(token, (err, user) => {
        if (err) return res(err);
        if (user) return res.status(400).json({
            error: true,
            message: "You are already logged in"
        });

        else {
            User.findOne({'username': req.body.username}, function (err, user) {
                if (!user) return res.json({isAuth: false, message: ' Auth failed ,username not found'});

                user.comparepassword(req.body.password, (err, isMatch) => {
                    if (!isMatch) return res.json({isAuth: false, message: "password doesn't match"});

                    user.generateToken((err, user) => {
                        if (err) return res.status(400).send(err);
                        res.cookie('auth', user.token).json({
                            isAuth: true,
                            id: user._id
                            , username: user.username
                        });
                    });
                });
            });
        }
    });
}
exports.register = async function (newUser, res) {
    if (newUser.password !== newUser.password2) return res.status(400).json({message: "password not match"});

    User.findOne({username: newUser.username}, function (err, user) {
        console.log('find one result', err, user);
        if (user) return res.status(400).json({auth: false, message: "username exits"});

        newUser.save((err, doc) => {
            console.log('error', err, doc);
            if (err) {
                console.log(err);
                return res.status(400).json({success: false});
            }
            res.status(200).json({
                success: true,
                user: doc
            });
        });
    });
}
