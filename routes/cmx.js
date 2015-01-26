var express = require('express');
var router = express.Router();
var config = require('config');
var cmxConfig = config.get('cmx');
var debug = require('debug')('cmx');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send(cmxConfig.validator);
});

router.post('/', function(req, res) {
  debug(req.body);
});

module.exports = router;
