const express = require('express');
const router = express.Router();

const user = require('../controllers/users_api');

router.put('/set-default', user.setDefault);
router.put('/add', user.add);
router.put('/remove', user.remove);
router.get('/get-data', user.getData);

module.exports = router;
