var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");

  person1= {
    name: 'Tim',
    email: 'tim@gmail.com',
    number:'(571) 426-1433'
  };

  person2 = {
    name:'Liam',
    email:'neason@taken2.com',
    number: '(777) 777-7777'
  };

  person3={
    name: 'Jessie',
    email:'jessie@vma.com',
    number: '(684) 426-1232'
  };

  var contactlist = [person1, person2, person3];

  $scope.contactlist = contactlist;//This makes it so that the controller can be accessed by our view (index.html)

}]);
