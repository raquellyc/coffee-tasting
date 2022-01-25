var express = require('express');
var router = express.Router();
var brewsCtrl = require('../controllers/brews');

router.get('/', brewsCtrl.index);

module.exports = router;