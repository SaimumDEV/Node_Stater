const express = require('express');
const authController = require('../../controllers/auth');

const router = express.Router();

router.route('/login').post(authController.login);
router.route('/check').get(authController.isLogin);

module.exports = router;
