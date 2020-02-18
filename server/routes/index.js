const express = require('express');
const router = express.Router();

const index = require('../controllers/index_api');

/* GET home page. */
router.post('/login', index.userLogin);
router.post('/sign-up', index.userSignUp);
router.get('/logout', index.userLogout);

module.exports = router;
