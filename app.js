pp.get('/', function(req, res){
  res.render('index', {
    title: 'Flappy Beer'
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
