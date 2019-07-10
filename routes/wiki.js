// wiki.js Route module

var express = require('express');
var router = express.Router();

// Home Page route
router.get('/', function(req, res) {
    res.send('Wiki home page!');
});

// About page route
router.get('/About', function(req, res) {
    res.send('About this Wiki')
});

module.exports = router;