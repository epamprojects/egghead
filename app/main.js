var myApp = angular.module("myApp", []);

myApp.controller("FirstCtrl", function ($scope) {
   $scope.start = "start"
   $scope.myReverse = function (){
      return $scope.start.split("").reverse().join("");
   }
});