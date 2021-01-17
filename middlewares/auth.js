const User = require('../models/user.model');

let auth = (req, res, next) => {
    let token = req.cookies.auth;
    console.log('token', token)
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({
            error: true,
            message: "Error, No Token Detected"
        });
        req.token = token;
        req.user = user;
        next();
    })
}

module.exports = {auth};
