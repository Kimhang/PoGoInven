var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Po Go!', text: 'lalalala' });
});

module.exports = router;
