app.get('/', function(req, res){
  res.render('index', {
    title: 'Flappy Beer'
  });
});

app.get('/leaderboard', function(req, res){
  res.render('leaderboard', {
    title: 'Hall of Fame'
  });
});

app.get('/about', function(req, res){
  res.render('about', {
    title: 'About Floopy Beer Team'
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact Team'
  });
});
