var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_19', { title: 'Express', name:'zongyi Wu', id:'210417019' });
});

module.exports = router;