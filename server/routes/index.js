var express = require('express');
var router = express.Router();

/* GET home page. */
// 127.0.0.1 (/)
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: '' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
/* GET contact us page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact us' });
});



module.exports = router;

