var express = require('express');
var router = express.Router();
var config = require('config');
var cmxConfig = config.get('cmx');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource' + JSON.stringify(cmxConfig));
});

module.exports = router;
