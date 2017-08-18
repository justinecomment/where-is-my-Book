myApp.controller('authorsCtrl', function($scope, authorsService) {
    
    $scope.authorsLists = null;

    authorsService.getAuthors().then(function(result){
        $scope.authorsLists = result.data;
    });

});
