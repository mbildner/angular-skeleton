;(function (angular) {
  'use strict';
  angular.module('app', []);
})(angular);

angular.module('app').controller('HomePageController', ["$scope", function ($scope) {
  'use strict';

	$scope.greetingText = 'Get to work!';
}]);

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
