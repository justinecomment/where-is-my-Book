myApp.controller('addBookCtrl', function($scope, booksService, authorsService, $location, LxNotificationService) {
   
    $scope.submitAddBook = function(){
       if($scope.addBookForm.$valid === true){
            var formData = {
                'title': document.getElementById("title").value,
                'titleOriginal': document.getElementById("titleOriginal").value,
                'year': document.getElementById("year").value,
                'genre': document.getElementById("genre").value,
                'format': document.getElementById("format").value,
                'author': document.getElementById("author").value,
                'language': document.getElementById("language").value,
                'isbn': document.getElementById("isbn").value,
            } 
            booksService.postBook(formData).then(function(result){
                booksService.getBooks().then(function(result){
                    $scope.booksLists = result.data;
                });
            });
            booksService.getBooks();
            $location.path('/books');
            LxNotificationService.notify('Livre Ajouté', undefined, undefined, undefined, undefined, undefined, 2 * 1000);
       }
       else{
           console.log('error');
           $scope.addBookForm.$valid = false;
       }
    };

    authorsService.getAuthors().then(function(result){
        $scope.authorsLists = result.data;
        console.log($scope.authorsLists);
    });


});
