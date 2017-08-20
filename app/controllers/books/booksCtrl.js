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


});