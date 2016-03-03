var myApp = angular.module("myApp", []);
myApp.filter("reverseFilter", function(){
   return function(data){
      return data.toString().split("").reverse().join("");
   }
});


myApp.controller("FirstCtrl", function ($scope) {
   $scope.start = "123";
});