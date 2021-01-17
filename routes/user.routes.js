const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/logout', UserController.logout)
router.get('/profile', UserController.profile)

module.exports = router;
