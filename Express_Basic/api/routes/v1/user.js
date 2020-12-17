const express = require('express');
const userController = require('../../controllers/v1/user');

const router = express.Router();

router.route('/user').get(userController.getUser).post(userController.createUser);

module.exports = router;
