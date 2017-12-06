myApp.controller('lendBookCtrl', function($scope, booksService, $location, friendsService) {

    var bookSaved = booksService.getBookSaved();

    friendsService.getFriends().then(function(result){
        $scope.friendsLists = result.data;
    });

    $scope.lendBook = function(){
        if($scope.lendBookForm.$valid === true){
            var formData = { 
                'nom' : document.getElementById('nom').value,
                'idBook' :bookSaved.id,
            };
            
            friendsService.getFriends().then(function(result){
                $scope.friendsLists = result.data;
            });
        }
    }
    
});

