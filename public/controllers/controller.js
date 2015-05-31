var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");

  $http.get('/contactlist').success(function(response) {//route that we get data from
    console.log("I got the data I requested");
  $scope.contactlist = response;//This makes it so that the controller can be accessed by our view (index.html)

}]);
