myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'accueilCtrl',
    templateUrl: 'views/accueil.html'
  })
  .when('/books', {
    controller: 'booksCtrl',
    templateUrl: 'views/books.html'
  })
  .when('/addBook', {
    controller: 'addBookCtrl',
    templateUrl: 'views/addBook.html'
  })
  .when('/authors', {
    controller: 'authorsCtrl',
    templateUrl: 'views/authors.html'
  })
   .otherwise({
    redirectTo: '/'
  });
}]);


