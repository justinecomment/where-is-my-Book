myApp.controller('booksCtrl', function($scope, booksService) {

    $scope.booksLists = null;

    booksService.getBooks().then(function(result){
        $scope.booksLists = result.data;
    });


});