myApp.controller('addAuthorCtrl', function($scope) {

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
                console.log(formData);
        }
        else{
            console.log('error');
            $scope.addBookForm.$valid = false;
        }
    };

});