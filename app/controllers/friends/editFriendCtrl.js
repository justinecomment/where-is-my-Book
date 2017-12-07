myApp.controller('editFriendCtrl', function($scope, LxNotificationService, friendsService, $location) {
    
    $scope.friendSaved = friendsService.getFriendSaved();

    $scope.editFriend= function()
    {
        if($scope.editFriendForm.$valid === true){
                var formData = {
                    'id':  $scope.friendSaved.id,
                    'nom': document.getElementById("nom").value,
                    'prenom': document.getElementById("prenom").value
                };

                friendsService.updateAction(formData);
                friendsService.getAllAction();
                $location.path('/friends');
                LxNotificationService.notify('Ami modifié', undefined, undefined, undefined, undefined, undefined, 2 * 1000);
        }
        else{
            console.log('error');
            $scope.editFriendForm.$valid = false;
        }
    };


});
