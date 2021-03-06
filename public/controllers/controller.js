var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");

  var refresh = function(){
    $http.get('/contactlist').success(function(response) {
      //route that we get data from
      console.log("I got the data I requested");

      //This makes it so that the controller can be accessed by our view (index.html)
      $scope.contactlist = response;
      $scope.contact = "";
    });
  };

  //intial load of the contacts
  refresh();

  //Adding the contacts to our controller
  $scope.addContact = function() {
    console.log($scope.contact);
    //sends the input data to server, and add it to db contactlist
    $http.post('/contactlist',$scope.contact).success(function(response) {
      console.log(response);
      //Reload conacts everytime we input more contacts
      refresh();
    })
  }

  //Removing Contacts by ID
  $scope.remove = function(id) {
    console.log(id);
    $http.delete('/contactlist/' + id).success(function(response){
      refresh();
    });
  };

  //Edit contacts by ID, and put them response boxes
  $scope.edit = function(id) {
    console.log(id);
    $http.get('/contactlist/' + id).success(function(response){
      $scope.contact = response;
    });
  };

  //Update the contacts
  $scope.update = function(){
    console.log($scope.contact._id);
    $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
      refresh();
    })
  };

  //Clear the contact from response
  $scope.deselect = function(){
    $scope.contact = "";
  }



}]);


