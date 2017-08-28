myApp.controller('editBookCtrl', function($scope, booksService, authorsService, $location, LxNotificationService) {

    $scope.bookSaved = booksService.getBookSaved();
    console.log($scope.bookSaved.author)

    $scope.editBook = function(){
        if($scope.editBookForm.$valid === true){
                var formData = {
                    'id':  $scope.bookSaved.id,
                    'title': document.getElementById("title").value,
                    'titleOriginal': document.getElementById("titleOriginal").value,
                    'year': document.getElementById("year").value,
                    'genre': document.getElementById("genre").value,
                    'author':document.getElementById("author").value,
                    'isbn': document.getElementById("isbn").value,
                    'format': document.getElementById("format").value,
                    'language': document.getElementById("language").value
                };

                booksService.editBook(formData).then(function(result){
                   booksService.getBooks().then(function(result){
                        $scope.booksLists = result.data;
                    })
                });               
                booksService.getBooks();
                $location.path('/books');
                LxNotificationService.notify('Livre modifié', undefined, undefined, undefined, undefined, undefined, 2 * 1000);
        }
        else{
            console.log('error');
            $scope.editAuthorForm.$valid = false;
        }
    };

     authorsService.getAuthors().then(function(result){
        $scope.authorsLists = result.data;
    });



});

