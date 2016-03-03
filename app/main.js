var myApp = angular.module("myApp", []).
factory("Mans", function () {
    return [
        {
            name: "Ivan",
            age: 50
        },
        {
            name: "Petr",
            age: 100
        },
        {
            name: "Vasiliy",
            age: 15
        }
    ];
}).
filter("UpperCase", function () {
    return function (data) {
        return data.toUpperCase();
    }
});


myApp.controller("FirstCtrl", function ($scope, Mans) {
    $scope.people = Mans;
    $scope.myReverse = function () {
        return $scope.start.split("").reverse().join("");
    }
});