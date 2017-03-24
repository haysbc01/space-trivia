
require('colors');
var express    = require('express'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser')
    PORT       = 3000;

var app = express();
app.use(express.static('public'), bodyParser.json())


app.get('/', (req, res)=>{
  res.sendFile('index.html', {root : './public/html'});
});


// app.get('/quiz', (req, res)=>{
//   res.sendFile('quiz.html', {root: './public'})
// })


app.get('/quiz/:planet', (req,res)=>{
  res.sendFile('quiz.html', {root : './public/html'})
})

// app.get('/quiz/:planet', (req,res)=>{
//   res.send(`Quiz for ${req.params.planet}`);
// });

app. server = app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`.america);
});
