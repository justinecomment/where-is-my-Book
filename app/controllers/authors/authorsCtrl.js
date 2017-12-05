myApp.controller('authorsCtrl', function($scope, authorsService, $location, LxNotificationService) {
    
    $scope.authorsLists = null;

    authorsService.getAuthors().then(function(result){
        $scope.authorsLists = result.data;
    });

    $scope.deleteAuthor = function(){
       var index = this.authorsList.id;
       
        LxNotificationService.confirm('', 'Voulez-vous vraiment supprimer?',
            {
               cancel: 'Cancel',
               ok    : 'Supprimer'
            }, function(answer){
                if (answer){
                    authorsService.deleteAuthor(index).then(
                        function(result){
                            LxNotificationService.error('Error');
                        },
                        function(result){
                            authorsService.getAuthors().then(function(result){
                              $scope.authorsLists = result.data;
                            });
                            LxNotificationService.success('Livre supprimé');
                        }
                    );
                }
                else{
                    $location.path('/authors');
                }
            }
        );
    };

    $scope.editAuthor = function(){
       authorsService.saveAuthor(this.authorsList);
    }; 

});
