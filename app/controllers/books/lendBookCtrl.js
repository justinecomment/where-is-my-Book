myApp.controller('lendBookCtrl', function($scope, booksService, $location) {

    var bookSaved = booksService.getBookSaved();

    $scope.lendBook = function(){
        if($scope.lendBookForm.$valid === true){
            var formData = { 
                'nom' : document.getElementById('nom').value,
                'idBook' :bookSaved.id,
            }
            
            booksService.addPret(formData).then(function(result){
               booksService.getBookPrete();
               booksService.modifyPret(formData.nom, formData.idBook);
            $location.path('/');
            });
            
        }
    }
    
});

