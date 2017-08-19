myApp.controller('authorsCtrl', function($scope, authorsService, $location, LxNotificationService) {
    
    $scope.authorsLists = null;

    authorsService.getAuthors().then(function(result){
        $scope.authorsLists = result.data;
    });

    $scope.deleteAuthor = function(){
       var index = this.authorsList.id;
       
        LxNotificationService.confirm('', 'Voulez-vous Editer ou supprimer?',
                {
                   cancel: 'Supprimer',
                   ok    : 'Cancel'
                }, function(editer){
                    if (editer){
                        $location.path('/authors');
                    }
                    else{
                        authorsService.deleteAuthor(index).then(function(result){
                             authorsService.getAuthors().then(function(result){
                                  $scope.authorsLists = result.data;
                             });
                        });
                         LxNotificationService.error('Auteur supprimé');
                    }
        });

    };

    $scope.editAuthor = function(){
       authorsService.saveAuthor(this.authorsList);
    };

});
