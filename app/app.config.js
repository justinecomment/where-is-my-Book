myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'accueilCtrl',
    templateUrl: 'views/accueil.html'
  })
  .when('/books', {
    controller: 'booksCtrl',
    templateUrl: 'views/books/books.html'
  })
  .when('/addBook', {
    controller: 'addBookCtrl',
    templateUrl: 'views/books/addBook.html'
  })
  .when('/editBook', {
    controller: 'editBookCtrl',
    templateUrl: 'views/books/editBook.html'
  })
  .when('/authors', {
    controller: 'authorsCtrl',
    templateUrl: 'views/authors/authors.html'
  })
  .when('/addAuthor', {
    controller: 'addAuthorCtrl',
    templateUrl: 'views/authors/addAuthor.html'
  })
   .when('/editAuthor', {
    controller: 'editAuthorCtrl',
    templateUrl: 'views/authors/editAuthor.html'
  })
   .when('/lendBook', {
    controller: 'lendBookCtrl',
    templateUrl: 'views/books/lendBook.html'
  })
   .otherwise({
    redirectTo: '/'
  });
}]);


