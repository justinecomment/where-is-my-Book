myApp.controller('addFriendsCtrl', function($scope, LxNotificationService, friendsService, $location) {
    
    $scope.addFriend = function(){
        if($scope.addFriendForm.$valid === true){
                var formData = {
                    'nom': document.getElementById("nom").value,
                    'prenom': document.getElementById("prenom").value
                };
                friendsService.createAction(formData).then(function(result){
                    friendsService.getAllAction().then(function(result){
                        $scope.friendsLists = result.data;
                    });               
                     $location.path('/friends');
                     LxNotificationService.notify('Ami ajouté', undefined, undefined, undefined, undefined, undefined, 2 * 1000);
                })
        }
        else{
            console.log('error');
            $scope.addFriendForm.$valid = false;
        }
    };

});
