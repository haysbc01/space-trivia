require('colors');
var express    = require('express'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser')
    PORT       = 3000;

mongoose.connect("mongodb://localhost/solar_system");
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'), bodyParser.json())

app.get('/quiz/:planet', (req,res)=>{
  res.sendFile('quiz.html', {root : './public/html'})
})

app.get('/planets/:name', (req, res)=> {
  Planet.findOne({name: req.params.name}, (err, data)=>{
    res.send(data)
  })
})


app.get('/', (req, res)=>{
  res.sendFile('index.html', {root : './public/html'});
});


app.get('/quiz', (req, res)=>{
  res.sendFile('quiz.html', {root: './public'})
})



// app.get('/quiz/:planet', (req,res)=>{
//   res.send(`Quiz for ${req.params.planet}`);
// });

var planetSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  quest: Array

});

var Planet = mongoose.model("Planet", planetSchema);
//
// Planet.create({
//     name: "Earth",
//     image: "http://solarsystem.nasa.gov/images/galleries/Apollo_17_Blue-Marble_1400.jpg",
//     description: "Our Home Planet",
//     quest: [{
//         Q: "Earth's atmosphere is made of _blank_ percent nitrogen and _blank_ percent oxygen.",
//         answers: ["78 percent nitrogen , 21 percent oxygen",
//           "50 percent nitrogen , 50 percent oxygen",
//           "25 percent nitrogen , 75 percent oxygen",
//           "90 percent nitrogen , 10 percent oxygen"
//         ],
//         CAn: "78 percent nitrogen , 21 percent oxygen"
//       }, {
//         Q: "Our _blank_ protects us from incoming meteoroids, most of which break up in our atmosphere before they can strike the surface as meteorites.",
//         answers: ["Moon",
//           "Oxygen",
//           "Atmosphere",
//           "Sun"
//         ],
//         CAn: "Atmosphere"
//       }, {
//         Q: "Earth is the _blank_ planet from the sun.",
//         answers: ["Fourth",
//           "Second",
//           "Third",
//           "Fifth"
//         ],
//         CAn: "Third"
//       },
//     ]
//   },
//
//   {
//     name: "Sun",
//     image: "http://solarsystem.nasa.gov/images/galleries/PIA17669_732.jpg",
//     description: "Pulses from the Sun",
//     quest: [{
//         Q: "The Sun is _blank_ years old.",
//         answers: ["500 years old",
//           "556 million",
//           "4.6 billion",
//           "375 billion"
//         ],
//         CAn: "4.6 billion"
//       }, {
//         Q: "Light from the Sun takes _blank_ minutes to reach Earth. ",
//         answers: ["Light from the Sun takes twenty minutes to reach Earth. ",
//           "Light from the Sun takes two minutes to reach Earth. ",
//           "Light from the Sun takes twelve minutes to reach Earth. ",
//           "Light from the Sun takes eight minutes to reach Earth. "
//         ],
//         CAn: "Light from the Sun takes eight minutes to reach Earth. "
//       }, {
//         Q: "_blank_ number of Earths could fit inside the Sun.",
//         answers: ["200,566",
//           "One Billion",
//           "85",
//           "One million"
//         ],
//         CAn: "One million"
//       },
//     ]
//
//   }, {
//     name: "Venus",
//     image: "http://solarsystem.nasa.gov/images/galleries/VenusIR_jaxa_9601.jpg",
//     description: "Night on Venus in Infrared from Orbiting Akatsuki",
//     quest: [{
//         Q: "One day-night cycle on Venus takes _blank_ Earth days.",
//         answers: ["400",
//           "117",
//           "210",
//           "365"
//         ],
//         CAn: "117"
//       }, {
//         Q: "Venus has _blank_ moons.",
//         answers: ["4",
//           "0",
//           "1",
//           "10"
//         ],
//         CAn: "0"
//       }, {
//         Q: "Venus is the second closest planet to the sun at a distance of about _blank_ miles. ",
//         answers: ["67 million miles",
//           "60 billion miles",
//           "600,000 miles",
//           "2.5 million miles"
//         ],
//         CAn: "67 million miles"
//       },
//     ]
//   }, {
//     name: "Mercury",
//     image: "http://solarsystem.nasa.gov/images/galleries/PIA15160_br.jpg",
//     description: "The Swiftest Planet",
//     quest: [{
//         Q: "Mercury is the _blank_ planet in our solar system.",
//         answers: ["fifth smallest",
//           "largest",
//           "second smalllest",
//           "smallest"
//         ],
//         CAn: "smallest"
//       }, {
//         Q: "Daytime Temperatures can reach _blank_ degrees Fahrenheit and drop to _blank_ degrees Fahrenheit at night. ",
//         answers: ["Daytime Temperatures can reach 800 degrees Fahrenheit and drop to -290 degrees Fahrenheit at night. ",
//           "Daytime Temperatures can reach 500 degrees Fahrenheit and drop to -5000 degrees Fahrenheit at night. ",
//           "Daytime Temperatures can reach 600 degrees Fahrenheit and drop to -980 degrees Fahrenheit at night. ",
//           "Daytime Temperatures can reach 1500 degrees Fahrenheit and drop to -390 degrees Fahrenheit at night. "
//         ],
//         CAn: "Daytime Temperatures can reach 800 degrees Fahrenheit and drop to -290 degrees Fahrenheit at night. "
//       }, {
//         Q: "Mercury is a _blank_ planet, also known as a terrestrial planet.",
//         answers: ["Gassy",
//           "Liquid",
//           "Rocky",
//           "Frozen"
//         ],
//         CAn: "Rocky"
//       },
//
//     ]
//   }, {
//     name: "Mars",
//     image: "The Red Planet",
//     description: "http://mepag.jpl.nasa.gov/hightlight_images/mars2_115916c.jpg",
//     quest: [{
//         Q: "There are _blank_ rings around Mars.",
//         answers: ["2",
//           "10",
//           "0",
//           "1"
//         ],
//         CAn: "0"
//       }, {
//         Q: "Mars has two moons named _blank_ and _blank_.",
//         answers: ["Mars has two moons named Phebe and Damian.",
//           "Mars has two moons named Phobos and Deimos.",
//           "Mars has two moons named Philip and Debbie.",
//           "Mars has two moons named PlanetX176 and PlanetX342."
//         ],
//         CAn: "Mars has two moons named Phobos and Deimos."
//       }, {
//         Q: "Mars is known as the Red Planet because _blank_ minerals in the Martian soil oxidize, or rust, causing the soil to look red.",
//         answers: ["rust",
//           "iron",
//           "copper",
//           "gold"
//         ],
//         CAn: "iron"
//       },
//
//     ]
//   }, {
//     name: "Jupiter",
//     image: "http://solarsystem.nasa.gov/images/galleries/hs-2016-24_1400.jpg",
//     description: "King of the planets",
//     quest: [{
//         Q: "Jupiter is _blank_ times wider than Earth. ",
//         answers: ["11",
//           "10",
//           "2",
//           "7"
//         ],
//         CAn: "11"
//       }, {
//         Q: "Jupiter has _blank_ known moons. ",
//         answers: ["2",
//           "54",
//           "11",
//           "67"
//         ],
//         CAn: "67"
//       }, {
//         Q: "Jupiter's Great Red Spot is a _blank_.",
//         answers: ["crater",
//           "canyon",
//           "giant storm",
//           "ocean"
//         ],
//         CAn: "giant storm"
//       },
//     ]
//   }, {
//     name: "Saturn",
//     image: "http://solarsystem.nasa.gov/images/galleries/rings_diagram_discovery_order_300.gif",
//     description: "Jewel of Our Solar System",
//     quest: [{
//         Q: "Saturn has the most spectacular ring system, which is made up of _blank_ rings with several gaps and divisions between them.",
//         answers: ["5",
//           "7",
//           "4",
//           "3"
//         ],
//         CAn: "7"
//       }, {
//         Q: "One day on Saturn takes _blank_ hours",
//         answers: ["One day on Saturn takes 14.7 hours",
//           "One day on Saturn takes 30 hours",
//           "One day on Saturn takes 112 hours",
//           "One day on Saturn takes 10.7 hours"
//         ],
//         CAn: "One day on Saturn takes 10.7 hours"
//       }, {
//         Q: "Saturn's atmosphere is made up mostly of _blank_ and _blank_.",
//         answers: ["Saturn's atmosphere is made up mostly of helium and nitrous-oxide.",
//           "Saturn's atmosphere is made up mostly of nitrogen and helium.",
//           "Saturn's atmosphere is made up mostly of oxygen and nitrogen.",
//           "Saturn's atmosphere is made up mostly of hydrogen and helium."
//         ],
//         CAn: "Saturn's atmosphere is made up mostly of hydrogen and helium."
//       },
//     ]
//
//   }, {
//     name: "Neptune",
//     image: "http://www.nasa.gov/sites/default/files/thumbnails/imageneptune_full.jpg",
//     description: "The Windiest Planet",
//     quest: [{
//         Q: "_blank_ is the only spacecraft to have visited Neptune.",
//         answers: ["Voyager 4",
//           "Apollo 2",
//           "Voyager 2 ",
//           "Avenger 3"
//         ],
//         CAn: "Voyager 2"
//       }, {
//         Q: "Neptune has _blank_ rings.",
//         answers: ["Neptune has six rings.",
//           "Neptune has seven rings.",
//           "Neptune has ten rings.",
//           "Neptune has two rings."
//         ],
//         CAn: "Neptune has six rings."
//       }, {
//         Q: "If the sun were as tall as a typical front door, the Earth would be the size of a nickel and Neptune would be about as big as a _blank_.",
//         answers: ["tennis ball",
//           "golf ball",
//           "baseball",
//           "basketball"
//         ],
//         CAn: "baseball"
//       },
//     ]
// });

// function(err, planet) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("NEWLY CREATED PLANET");
//     console.log(planet);
//   }
// }
// });

// //app.get("/", function(req, res) {
//   res.sendFile("  ");
// });

app.get("/planet", function(req, res) {
  Planet.find({}, function(err, allPlanets) {
    if (err) {
      console.log(err);
    } else {
      res.sendFile("quiz.html", {
        planets: allPlanets
      });
    }
  });

});

app.post("/planets", function(req, res) {
  var name = req.body.name
  var image = req.body.image
  var description = req.body.description
  var quest = req.body.quest
  if (err) {
    console.log(err);
  } else {
    res.redirect("/planets");
  }
});

app.get("/planets/:id", function(req, res) {
  Planet.findById(req.params.id, function(err, foundPlanet) {
    if (err) {
      console.log(err);
    } else {
      res.sendFile("/  ")
    }
    });

  });

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.america);
});
