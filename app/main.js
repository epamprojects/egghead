var myApp = angular.module("myApp", []).
     factory("Mans", function () {
        return [
            {
                name: "Ivan",
                age: 50
            },
            {
                name: "Vasiliy",
                age: 15
            },
            {
                name: "Petr",
                age: 100
            }
        ];
    });

    myApp.controller("FirstCtrl", function ($scope, Mans) {
            $scope.people = Mans;

    });