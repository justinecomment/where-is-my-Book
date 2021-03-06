myApp.service('booksService', function($http){
    const baseUrl = "http://localhost/whereIsMyBook-symfony/web/app_dev.php";
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
            url: baseUrl + '/addbook', 
            dataType: 'json', 
            data: dataToPost,
            headers: {
            'Content-Type': 'application/json'
            }
        });
    };

    this.getBooks = function(){
         return $http.get(baseUrl + '/listbook').success(function(result){
            return result.data;
        })
    };


    // this.rendu = function(nom_pret){
    //     return $http({
    //         method  : 'DELETE',
    //         url: baseUrl + '/books.php?rendu=' + nom_pret,
    //         data    : {"nom_pret":  nom_pret },
    //         headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    //     })
    // }

     this.deleteBook = function(index){
        return $http({
            method  : 'DELETE',
            url: baseUrl + '/deleteBook/' + index,
            data    : {"id":  index },
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json'
            }
        })
    };

    this.editBook= function(formData){
         return $http({
            method : 'PUT',
            url : baseUrl + '/updateBook/' + formData.id,
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
            url: baseUrl + '/lendBook/' + dataToPost.idBook, 
            dataType: 'json', 
            data: dataToPost,
            headers: {
            'Content-Type': 'application/json'
            }
        });
    };

    this.getBookPrete = function(){
         return $http.get(baseUrl + '/listLentBook').success(function(result){
            return result.data;
        })
    }


    // this.modifyPret = function(nom, idBook){
    //      return $http({
    //         method : 'PUT',
    //         url : baseUrl + '/books.php?modifyPret=',
    //         dataType: 'json',
    //         data : {'nom': nom , 'idBook': idBook},
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    // };

    // this.searchBook = function(searchValue){
    //     return $http.get(baseUrl + '/books.php?search=' + searchValue).success(function(result){
    //         return result.data;
    //     })
    // }


});