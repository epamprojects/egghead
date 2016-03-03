var myApp = angular.module("myApp", []);

myApp.controller("FirstCtrl", function ($scope) {
   $scope.start = "start";
   $scope.myReverse = function (){
      return $scope.start.split("").reverse().join("");
   }
});

myApp.directive("first", function () {
   return {
      restrict:"AECM",
      templateUrl:"templates/firstTmpl.html",
      controller: "FirstCtrl"
   }
});