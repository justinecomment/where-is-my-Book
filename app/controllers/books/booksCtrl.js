myApp.controller('booksCtrl', function($scope, booksService, LxNotificationService, $location, $filter) {

    $scope.booksLists = null;
    

   
    booksService.getBooks().then(function(result){
        $scope.booksLists = result.data;
        booksLists.push(result.data);
    });


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
    };


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
    };


    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.q = '';
    var booksLists = [];
    $scope.booksLists = booksLists;

    
    $scope.getData = function () {
      return $filter('filter')($scope.booksLists, $scope.q)
    }

    $scope.numberOfPages=function(){
       return Math.ceil($scope.getData().length/$scope.pageSize);   
    };
  
    
});



myApp.filter('startFrom', function() {
    return function(booksLists, start) {
        if (!booksLists || !booksLists.length){ 
            return; 
        }
        else{
            start = + start;
            return booksLists.slice(start)
        }
    }
});
