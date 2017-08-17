myApp.service('booksService', function($http){
    const baseUrl = 'http://localhost/whereIsMyBook';

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
});