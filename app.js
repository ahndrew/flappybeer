var express = require('express');
var app = express();
var LeaderBoard = require('./leaderboard').LeaderBoard;

app.configure(function(){  
  app.set('views', __dirname + '/views');
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.sendfile('./views/index.html', {
    title: 'Flappy Beer'
  });
});

app.get('/leaderboard', function(req, res){
  res.sendfile('./views/leaderboard.html', {
    title: 'Hall of Fame'
  });
});

app.post('/leaderboard', function(req, res){
    LeaderBoard.save({
        id: req.param('id'),
        name: req.param('name'),
        score: req.param('score')
    }, function( error, docs) {
        res.redirect('/')
    });
});

app.get('/about', function(req, res){
  res.sendfile('./views/about.html', {
    title: 'About Floopy Beer Team'
  });
});

app.get('/contact', function(req, res){
  res.sendfile('./views/contact_us.html', {
    title: 'Contact Team'
  });
});

app.listen(1234);

