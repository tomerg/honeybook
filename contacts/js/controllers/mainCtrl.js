app.controller('mainCtrl', function($scope, contacts) {  

  $scope.loader = {
    "display": "block",
  }
  
  contacts.getALL().then(function(){
    $scope.contacts = contacts.contactsData; 
    console.log($scope.contacts);
    $scope.loader.display = "none";
  });
  
});