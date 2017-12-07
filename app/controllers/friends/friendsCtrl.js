myApp.controller('friendsCtrl', function($scope, LxNotificationService, friendsService) {
    
    $scope.friendsLists = null;
    friendsService.getAllAction().then(function(result){
        $scope.friendsLists = result.data;
    });


    $scope.deleteFriend = function()
    {
        var index = this.friends.id;

        
        LxNotificationService.confirm('', 'Voulez-vous vraiment supprimer?',
        {
           cancel   : 'Cancel',
           ok       : 'Supprimer'
        }, function(answer){
            if (answer){
                friendsService.deleteAction(index).then(
                    function(result){
                        friendsService.getAllAction().then(function(response){
                            $scope.friendsLists = response.data;
                        });
                        LxNotificationService.success('Ami supprimé');
                    },
                    function(result){
                        LxNotificationService.error('Error');
                    }
                );
            }
            else{
                 $location.path('/friends');
            };
           }
        );
    };



});
