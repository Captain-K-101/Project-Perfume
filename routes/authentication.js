const express = require('express');
const router = express.Router();
const productController = require('./../controllers/Register');

router.post('/register', productController.createUser);
router.post('/login', productController.getUser);

module.exports = router;
