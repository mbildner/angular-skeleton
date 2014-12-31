angular.module('app').directive('greetBox', function () {
  'use strict';
  window.console.log('GreetBox is being compiled');

  return {
    templateUrl: './views/GreetBox.html',
    restrict: 'E',
    link: function (scope) {
      window.console.log('GreetBox was linked');
      scope.demoMessage = 'this is the GreetBox!';
    }
  };
});
