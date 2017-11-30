myApp.service('authorsService', function($http){
    const baseUrl = 'http://localhost/whereIsMyBook-symfony/web/app_dev.php';
    var authorSaved;


    this.saveAuthor= function(author){
       return authorSaved = author;
    };

    this.getAuthorSaved = function(){
        return authorSaved;
    };

    // this.postAuthor = function(dataToPost){
    //     return $http({ 
    //         method: 'POST', 
    //         url: baseUrl + '/authors.php', 
    //         dataType: 'json', 
    //         data: dataToPost,
    //         headers: {
    //         'Content-Type': 'application/json'
    //         }
    //     });
    // };

    this.getAuthors = function(){
         return $http.get(baseUrl + '/listAuthors').success(function(result){
            console.log(result);
        })
    };

    // this.deleteAuthor = function(index){
    //     return $http({
    //         method  : 'DELETE',
    //         url: baseUrl + '/authors.php?id=' + index,
    //         data    : {"id":  index },
    //         headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    //     })
    // };

    // this.editAuthor= function(formData){
    //      return $http({
    //         method : 'PUT',
    //         url : baseUrl + '/authors.php?edit=',
    //         dataType: 'json',
    //         data : formData,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    // }

});