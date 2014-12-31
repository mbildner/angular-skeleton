angular.module('app', []);

alert('hello world');

angular.module('app').controller('HomePageController', ["$scope", function ($scope) {
	$scope.greetingText = 'Get to work!';
}]);
