var express = require('express');
const { homeScreen} = require('../controllers');
var router = express.Router();


router.get('/', homeScreen);

module.exports = router;
