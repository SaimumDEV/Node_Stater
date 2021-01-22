const express = require('express');
const authController = require('../../controllers/auth');

const router = express.Router();

router.route('/error').get(authController.socialError);
router.route('/social').get(authController.socialSuccess);

module.exports = router;
