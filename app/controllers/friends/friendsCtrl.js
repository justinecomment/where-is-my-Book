myApp.controller('friendsCtrl', function($scope, LxNotificationService, friendsService) {
    
    $scope.friendsLists = null;

    friendsService.getFriends().then(function(result){
        $scope.friendsLists = result.data;
    });

});
