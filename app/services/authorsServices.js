myApp.service('authorsService', function($http){
    const baseUrl = 'http://localhost/whereIsMyBook-symfony/web/app_dev.php';
    var authorSaved;


    this.saveAuthor= function(author){
       return authorSaved = author;
    };

    this.getAuthorSaved = function(){
        return authorSaved;
    };

    this.postAuthor = function(dataToPost){
        return $http({ 
            method: 'POST', 
            url: baseUrl + '/addAuthor', 
            dataType: 'json', 
            data: dataToPost,
            headers: {
            'Content-Type': 'application/json'
            }
        });
    };

    this.getAuthors = function(){
         return $http.get(baseUrl + '/listAuthors').success(function(result){
        })
    };

    this.deleteAuthor = function(index){
        return $http({
            method  : 'DELETE',
            url: baseUrl + '/deleteAuthor/' + index,
            data    : {"id":  index },
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json'
            }
        })
    };

    this.editAuthor= function(formData){
         return $http({
            method : 'PUT',
            url : baseUrl + '/updateAuthor/' + formData.id,
            data : formData,
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json'
            }
        })
    }

});