myApp.service('authorsService', function($http){
    const baseUrl = 'http://localhost/whereIsMyBook';

    this.postAuthor = function(dataToPost){
        return $http({ 
            method: 'POST', 
            url: baseUrl + '/authors.php', 
            dataType: 'json', 
            data: dataToPost,
            headers: {
            'Content-Type': 'application/json'
            }
        });
    };

    this.getAuthors = function(){
         return $http.get(baseUrl + '/authors.php').success(function(result){
            return result.data;
        })
    };
});