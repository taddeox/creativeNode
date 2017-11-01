var request = require('request');
var express = require('express');
var router = express.Router();

var websites = [
  {
    title: 'Pikachu',
    websiteUrl: 'http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pokemon%20Pixels/Pikachu_Icon__free__by_Aminako.gif~c200'
  },
  {
    title: 'Charmander',
    websiteUrl: 'http://24.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif'

  },
  {
    title: 'Mew',
    websiteUrl: 'http://media3.giphy.com/media/J5JrPT8r1xGda/giphy.gif'
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
