myApp.controller('editAuthorCtrl', function($scope, authorsService, $location, LxNotificationService) {
    
    $scope.authorSaved = authorsService.getAuthorSaved();
    
    if($scope.authorSaved.vivant == false){
        $scope.authorSaved.vivant = false;
    }else{
        $scope.authorSaved.vivant = true;
    }


    $scope.editAuthor= function(){
        if($scope.editAuthorForm.$valid === true){
                var formData = {
                    'id':  $scope.authorSaved.id,
                    'nom': document.getElementById("nom").value,
                    'prenom': document.getElementById("prenom").value,
                    'nationalite': document.getElementById("nationalite").value,
                    'vivant': $scope.authorSaved.vivant
                };
               
                authorsService.editAuthor(formData);
                authorsService.getAuthors();
                $location.path('/authors');
                LxNotificationService.notify('Auteur modifié', undefined, undefined, undefined, undefined, undefined, 2 * 1000);
        }
        else{
            console.log('error');
            $scope.editAuthorForm.$valid = false;
        }
    };

});
