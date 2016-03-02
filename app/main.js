var myApp = angular.module("myApp", []);

myApp.factory("Data", function(){
    return "data from factory";
});


myApp.controller("FirstCtrl", function ($scope) {
    $scope.message = "first ctrl";
});


myApp.controller("SecondCtrl", function ($scope) {
    $scope.message = "second ctrl";
});