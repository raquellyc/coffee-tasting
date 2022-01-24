var express = require('express');
var router = express.Router();
var beansCtrl = require('../controllers/beans');

router.get('/new', beansCtrl.new);
router.get('/:id', beansCtrl.show);

module.exports = router;