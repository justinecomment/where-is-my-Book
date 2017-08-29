myApp.service('booksService', function($http){
    const baseUrl = 'http://localhost/whereIsMyBook';
    var bookSaved;

    this.saveBook= function(book){
       return bookSaved = book;
    };

    this.getBookSaved = function(){
        return bookSaved;
    };

    this.postBook = function(dataToPost){
        return $http({ 
            method: 'POST', 
            url: baseUrl + '/books.php', 
            dataType: 'json', 
            data: dataToPost,
            headers: {
            'Content-Type': 'application/json'
            }
        });
    };

    this.getBooks = function(){
         return $http.get(baseUrl + '/books.php').success(function(result){
            return result.data;
        })
    };

     this.deleteBook = function(index){
        return $http({
            method  : 'DELETE',
            url: baseUrl + '/books.php?id=' + index,
            data    : {"id":  index },
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    };

    this.editBook= function(formData){
         return $http({
            method : 'PUT',
            url : baseUrl + '/books.php?edit=',
            dataType: 'json',
            data : formData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    this.lendBookPost = function(dataToPost){
        return $http({ 
            method: 'POST', 
            url: baseUrl + '/books.php?lend=', 
            dataType: 'json', 
            data: dataToPost,
            headers: {
            'Content-Type': 'application/json'
            }
        });
    }


});