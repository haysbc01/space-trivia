
require('colors');
var express    = require('express'),
    mongoose   = require('mongoose'),
    PORT       = 3000;

var app = express();
app.use(express.static('public'))


app.get('/', (req, res)=>{
  res.sendFile('index.html', {root : './public'});
});

app.get('/quiz', (req, res)=>{
  res.sendFile('quiz.html', {root: './public'})
})

app. server = app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`.america);
});
