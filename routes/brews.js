var express = require('express');
var router = express.Router();
var brewsCtrl = require('../controllers/brews');
const { routes } = require('../server');

router.get('/', brewsCtrl.index);
