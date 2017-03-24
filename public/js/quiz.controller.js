angular.module("spaceApp")
  .controller("quizController", quizCtrl)

  quizCtrl.$inject = ["$http"];

  function quizCtrl($http) {

    console.log("Working!");

    var quiz = this;
    quiz.userAnswers = [false, false, false];
    // quiz.userAnswer1 = false;


    quiz.checkAnswer = function(clickedAnswer, correctAnswer, question) {

      console.log(clickedAnswer, correctAnswer, question);


      if (clickedAnswer == correctAnswer) {
        console.log("You win")
        // alert("Great job!")
        quiz.userAnswers[quiz.planet.quest.indexOf(question)] = true;
      }

      else {
        console.log("Ooops, wrong answer");
        // alert("Too bad...")
        quiz.userAnswers[quiz.planet.quest.indexOf(question)] = false;
      }

    }

    quiz.checkAnswers = function() {


      for (var i = 0; i < quiz.userAnswers.length; i++) {

        if (quiz.userAnswers[i] == false) {
        console.log("try again...");
        alert("Keep trying. You can get all three correct!")
        return "try again..."
        }
      }

      console.log("Great! Go to next planet");
      alert("Great! Fly to another planet.")

      quiz.rocket = true;
      setTimeout(function(){
          window.location.href = '/'
      }, 3000)
  }

    quiz.planet = {};

    $http.get('/planets/'+window.location.pathname.split('/')[2])
      .then(function(response) {
      console.log(response);

      quiz.planet = response.data;
    })




    // {
    //   name: "Earth",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    //   description: "Our Home!",
    //   quest: [
    //     {
    //       Q: "What is Earth's name1",
    //       answers: ["Earth", "Venus", "Mars", "Xenon 34"],
    //       CAn: "Mars"
    //     },
    //     {
    //       Q: "What is Earth's name2",
    //       answers: ["Mars", "Venus", "Earth", "Xenon 34"],
    //       CAn: "Earth"
    //     },
    //     {
    //       Q: "What is Earth's name3",
    //       answers: ["Venus", "Earth", "Mars", "Xenon 34"],
    //       CAn: "Xenon 34"
    //     }
    //   ]
    // }

  }
