myApp.controller('accueilCtrl', function($scope, booksService) {

    booksService.getBookLend().then(function(result){
        $scope.booksLists = result.data;
    });
    
   
});