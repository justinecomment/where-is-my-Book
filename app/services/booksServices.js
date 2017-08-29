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
            url: baseUrl + '/books.php?add_book=', 
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

    this.getBookPrete = function(){
         return $http.get(baseUrl + '/books.php?book_prete=').success(function(result){
            return result.data;
        })
    }

    this.rendu = function(nom_pret){
        return $http({
            method  : 'DELETE',
            url: baseUrl + '/books.php?rendu=' + nom_pret,
            data    : {"nom_pret":  nom_pret },
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }

     this.deleteBook = function(index){
        return $http({
            method  : 'DELETE',
            url: baseUrl + '/books.php?deleteBook=' + index,
            data    : {"id_book":  index },
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    };

    this.editBook= function(formData){
         return $http({
            method : 'PUT',
            url : baseUrl + '/books.php?edit_book=',
            dataType: 'json',
            data : formData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    this.addPret = function(dataToPost){
        return $http({ 
            method: 'POST', 
            url: baseUrl + '/books.php?add_pret=', 
            dataType: 'json', 
            data: dataToPost,
            headers: {
            'Content-Type': 'application/json'
            }
        });
    };

    this.modifyPret = function(nom, idBook){
         return $http({
            method : 'PUT',
            url : baseUrl + '/books.php?modifyPret=',
            dataType: 'json',
            data : {'nom': nom , 'idBook': idBook},
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };


});