var myApp = angular.module("myApp", []);


myApp.directive("parent", function () {
    return {
        restrict: "E",
        templateUrl: "templates/parentTmpl.html",
        transclude: true,

        link: function () {
            console.log("first");
        },
        controller: function ($scope) {
            $scope.data = 0;

            this.getData = function () {
                return $scope.data
            };

            this.addData = function () {
                $scope.data++;
            };

            this.removeData = function () {
                $scope.data--;
            };
        }
    }
});

myApp.directive("child", function () {
    return {
        restrict: "E",
        require: "^parent",
        templateUrl: "templates/childTmpl.html",
        link: function (scope, element, attrs, firstCtrl) {
            scope.parentData = firstCtrl.getData();

            scope.addParentData = function () {
                firstCtrl.addData();
            };

            scope.removeParentData = function () {
                firstCtrl.removeData()
            };
        }
    }
});