var express = require('express');
var router = express.Router();
var beansCtrl = require('../controllers/beans');

router.get('/new', beansCtrl.new);

module.exports = router;