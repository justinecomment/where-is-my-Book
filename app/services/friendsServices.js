myApp.service('friendsService', function($http){
    
    const baseUrl = 'http://localhost/whereIsMyBook-symfony/web/app_dev.php';
    var friendSaved;

    this.saveFriend= function(friend){
       return friendSaved = friend;
    };

    this.getFriendSaved = function(){
        return friendSaved;
    };


    this.createAction = function(dataToPost){
        return $http({ 
            method: 'POST', 
            url: baseUrl + '/addFriend', 
            data: dataToPost,
            headers: {
            'Content-Type': 'application/json'
            }
        });
    };

    this.getAllAction = function(){
        return $http.get(baseUrl + '/listFriends').success(function(result){
            return result.data;
        })
    };

    this.deleteAction = function(index){
        return $http({
            method  : 'DELETE',
            url: baseUrl + '/deleteFriend/' + index,
            data    : {"id":  index },
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json'
            }
        })
    };

    this.updateAction= function(formData){
        return $http({
            method : 'PUT',
            url : baseUrl + '/updateFriend/' + formData.id,
            data : formData,
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json'
            }
        })
    };

});