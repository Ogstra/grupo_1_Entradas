const express = require('express');
const router = express.Router();
const userAuth = require('../middlewares/userAuth');
const adminCheck = require('../middlewares/adminCheck');

const mainController = require('../controllers/mainController.js');

router.get('/', mainController.getIndex);

router.get('/cart', mainController.getCart);

module.exports = router;