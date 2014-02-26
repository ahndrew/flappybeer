app.get('/', function(req, res){
  res.sendfile('/views/index.html', {
    title: 'Flappy Beer'
  });
});

app.get('/leaderboard', function(req, res){
  res.sendfile('/views/leaderboard.html', {
    title: 'Hall of Fame'
  });
});

app.get('/about', function(req, res){
  res.sendfile('/views/about.html', {
    title: 'About Floopy Beer Team'
  });
});

app.get('/contact', function(req, res){
  res.sendfile('/views/contact_us.html', {
    title: 'Contact Team'
  });
});
