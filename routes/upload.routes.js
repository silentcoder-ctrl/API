const express = require('express');
const router = express.Router();
const UploadService = require('../services/upload.services')
const {auth} = require('../middlewares/auth')
const multer = require('multer')
const multerConfig = require('../config/multer.config.js')
const upload = multer({
    storage: multerConfig.storage,
})

router.post('/file', upload.single('file'), function (req, res) {
    UploadService.upload(req, res);
});

module.exports = router;
