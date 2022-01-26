var express = require('express');
var router = express.Router();
var beansCtrl = require('../controllers/beans');

router.get('/', beansCtrl.index);
router.get('/new', beansCtrl.new);
router.get('/:id', beansCtrl.show);
router.post('/', beansCtrl.create);

module.exports = router;