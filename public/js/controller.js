angular.module('space')
      . controller('spaceController', spaceCtrl);

spaceCtrl.$inject = ['$http'];

function spaceCtrl($http){
  var space = this;

  space.greeting = 'hello'

  space.showBtn = function (event){
    space.planet = event;
    space.quiz = true;
  }

  space.startQuiz = function (planet){
    console.log(planet)

    window.location.href='/quiz/'+planet


  }
}
