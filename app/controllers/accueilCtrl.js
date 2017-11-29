myApp.controller('accueilCtrl', function($scope, booksService, LxNotificationService, $location) {

    // booksService.getBookPrete().then(function(result){
    //     $scope.booksLists = result.data;
    // });

    // $scope.rendu = function(){
    //    var name_pret = this.booksList.nom;
       
    //     LxNotificationService.confirm('', 'Confirmer?',
    //             {
    //                cancel: 'Rendu',
    //                ok    : 'Cancel'
    //             }, function(editer){
    //                 if (editer){
    //                     $location.path('/');
    //                 }
    //                 else{
    //                     booksService.rendu(name_pret).then(function(result){
    //                         booksService.getBookPrete().then(function(result){
    //                              $scope.booksLists = result.data;
    //                         })
    //                         LxNotificationService.error('Le livre a bien été rendu');
    //                     })
                       
    //                 }
    //     });

    // }
   
});