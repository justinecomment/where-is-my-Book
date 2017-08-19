myApp.controller('authorsCtrl', function($scope, authorsService, $route) {
    
    $scope.authorsLists = null;

    authorsService.getAuthors().then(function(result){
        $scope.authorsLists = result.data;
    });

    $scope.deleteAuthor = function(){
       var index = this.authorsList.id;

       authorsService.deleteAuthor(index);
       $route.reload();
       authorsService.getAuthors();
      
    }

});
