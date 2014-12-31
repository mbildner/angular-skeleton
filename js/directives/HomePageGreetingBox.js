angular.module('app').directive('homePageGreetingBox', function () {
  'use strict';

  return {
    templateUrl: 'views/HomePageGreetingBox.html',
    restrict: 'E',
    link: function (scope) {
      scope.demoMessage = 'this is the HomePageGreetingBox!';
    }
  };
});
