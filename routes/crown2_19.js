var express = require('express');
var router = express.Router();
const crown2Controller_19 = require('../controllers/crown2Controller_19');


/* GET home page. */
router.get('/', crown2Controller_19.getCategories);

module.exports = router;