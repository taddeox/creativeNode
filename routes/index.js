var request = require('request');
var express = require('express');
var router = express.Router();

var websites = [
  {
    title: 'Google',
    websiteUrl: 'http://www.google.com',
    color: 'cyan'
  },
  {
    title: 'Facebook',
    websiteUrl: 'http://www.facebook.com',
    color: 'pink'
  },
  {
    title: 'Twitter',
    websiteUrl: 'http://www.twitter.com',
    color: '#E30B5D'
  }
];

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
    res.sendFile('index.html', { root: 'public' });
});

router.get('/websites', function(req, res) {
  console.log("In websites");

  res.send(websites);

});

router.post('/websites', function(req, res) {
    console.log("In websites Post");
    console.log(req.body);
    websites.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 


module.exports = router;

