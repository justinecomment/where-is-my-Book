myApp.controller('addAuthorCtrl', function($scope, authorsService, $location, LxNotificationService) {

    $scope.vivant = null;
    if($scope.vivant === null){
        $scope.vivant = false;
    };

    $scope.addAuthor = function(){
        if($scope.addAuthorForm.$valid === true){
                var formData = {
                    'nom': document.getElementById("nom").value,
                    'prenom': document.getElementById("prenom").value,
                    'nationalite': document.getElementById("nationalite").value,
                    'vivant': $scope.vivant
                };
                authorsService.postAuthor(formData).then(function(result){
                    authorsService.getAuthors().then(function(result){
                        $scope.authorsLists = result.data;
                    });               
                     $location.path('/authors');
                     LxNotificationService.notify('Auteur ajouté', undefined, undefined, undefined, undefined, undefined, 2 * 1000);
                })
        }
        else{
            console.log('error');
            $scope.addAuthorForm.$valid = false;
        }
    };

});