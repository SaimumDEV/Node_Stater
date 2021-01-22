const express = require('express');
const authController = require('../../controllers/auth');

const router = express.Router();

router.route('/login').post(authController.login);
router.route('/token').post(authController.getAccessToken).delete(authController.deleteRefreshToken);

module.exports = router;
