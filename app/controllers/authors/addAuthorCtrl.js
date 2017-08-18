myApp.controller('addAuthorCtrl', function($scope, authorsService, $location) {

    $scope.vivant = null;
    if($scope.vivant === null){
        $scope.vivant = false;
    };

    $scope.submitAddAuthorForm = function(){
        if($scope.addAuthorForm.$valid === true){
                var formData = {
                    'nom': document.getElementById("nom").value,
                    'prenom': document.getElementById("prenom").value,
                    'nationalite': document.getElementById("nationalite").value,
                    'vivant': $scope.vivant
                } 
                authorsService.postAuthor(formData);
                authorsService.getAuthors();
                $location.path('/authors');
        }
        else{
            console.log('error');
            $scope.addBookForm.$valid = false;
        }
    };

});