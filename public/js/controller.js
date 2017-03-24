angular.module('space')
      .controller('spaceController', spaceCtrl);

spaceCtrl.$inject = ['$http'];

function spaceCtrl($http){
  var space = this;

  space.greeting = 'Rocking Rockets'

  space.showBtn = function (event){
    space.planet = event;
    space.quiz = true;
  }

  space.startQuiz = function (planet){
    console.log(planet)

    space.rocket = true;
    setTimeout (function(){
      window.location.href='/quiz/'+planet
    }, 3000)



  }
}
