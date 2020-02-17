const express = require('express');
const router = express.Router();

const guess = require('../controllers/guess_api');

router.put('/add', guess.add);
router.put('/remove', guess.remove);
router.put('/set-default', guess.setDefault);
router.get('/get-data', guess.getData);

module.exports = router;