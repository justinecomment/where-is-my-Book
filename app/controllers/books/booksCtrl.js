myApp.controller('booksCtrl', function($scope, booksService, LxNotificationService, $location) {

    $scope.booksLists = null;

    booksService.getBooks().then(function(result){
        $scope.booksLists = result.data;
    });

    $scope.deleteBook = function(){
        var index = this.booksList.id;
        
        LxNotificationService.confirm('', 'Voulez-vous vraiment supprimer?',
                {
                   cancel: 'Supprimer',
                   ok    : 'Cancel'
                }, function(editer){
                    if (editer){
                        $location.path('/books');
                    }
                    else{
                        booksService.deleteBook(index).then(function(result){
                             booksService.getBooks().then(function(result){
                                  $scope.booksLists = result.data;
                             });
                        });
                         LxNotificationService.error('Livre supprimé');
                    }
        });
    }

    $scope.editBook = function(){
      booksService.saveBook(this.booksList);
    };

    $scope.lendBook = function(){
        booksService.saveBook(this.booksList);
    };

    $scope.searchContact = function(){
        var stringToFind = document.getElementById('searchBar').value;
        if(stringToFind != null){
            booksService.searchBook(stringToFind).then(function(response){
            $scope.booksLists = response.data})
        }
        else{
            contactsService.getContacts().then(function(response) {
                $scope.booksLists  = response.data;
            })
        }
    }
});