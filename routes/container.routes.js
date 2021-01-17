const express = require('express');
const router = express.Router();
const ContainerController = require('../controllers/containers.controller')

router.post('/create', ContainerController.create)
router.post('/open', ContainerController.open)
router.delete('/delete', ContainerController.delete)

module.exports = router;

