var express = require('express');
var router = express.Router();
const apiCrown2Controller_19 = require('../controllers/apiCrown2Controller_19');


/* GET home page. */
router.get('/category_19', apiCrown2Controller_19.getCategories);

module.exports = router;