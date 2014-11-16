angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    .when('/nerds', {
      templateUrl: 'views/nerd.html', 
      controller: 'NerdController'
    });

  $locationProider.html5mode(true);

}]);
