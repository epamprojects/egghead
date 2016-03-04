var myApp = angular.module("myApp", []);

myApp.controller("AppCtrl", function ($scope) {
    $scope.ctrlFlavor = "blackbery"
});

myApp.directive("drink", function () {
    return {
        restrict: "AECM",
        templateUrl: "templates/firstTmpl.html",
        // if using "=" directive get a data from
        // controller the controller, wherein it is
        // if changed scope in controller scope will be changed in directive
        // and vice versa

        scope: {
            flavor: "="
        }
    }
});