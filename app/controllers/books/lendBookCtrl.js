myApp.controller('lendBookCtrl', function($scope, booksService) {

    $scope.lendBook = function(){

        if($scope.lendBookForm.$valid === true){
            var nom = { 'nom' : document.getElementById('nom').value }
            booksService.lendBookPost(nom);
        }
    }
    
});

