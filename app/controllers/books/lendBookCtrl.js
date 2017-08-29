myApp.controller('lendBookCtrl', function($scope, booksService) {

    var bookSaved = booksService.getBookSaved();

    $scope.lendBook = function(){
        if($scope.lendBookForm.$valid === true){
            var formData = { 
                'nom' : document.getElementById('nom').value,
                'idBook' :bookSaved.id,
            }
            console.log(formData)
            booksService.lendBookPost(formData);
            booksService.lendBookPut(formData);
        }
    }
    
});

