myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'accueilCtrl',
    templateUrl: 'views/accueil.html'
  })
  .when('/view1', {
    controller: 'View1Ctrl',
    templateUrl: 'views/view1.html'
  })
   .otherwise({
    redirectTo: '/'
  });
}]);


