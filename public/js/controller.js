angular.module('space'),
      . controller('spaceController', spaceCtrl);

spaceCtrl.$inject = [$http];

function spaceCtrl($http){
  var space = this;

  space.greeting = 'hello'
}
