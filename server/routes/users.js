const express = require('express');
const router = express.Router();

const user = require('../controllers/users_api');

/* GET users listing. */
router.post('/login', user.userLogin);
router.post('/sign-up', user.userSignUp);
router.get('/logout', user.userLogout);

module.exports = router;
