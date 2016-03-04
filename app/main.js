var myApp = angular.module("myApp", []);


myApp.directive("first", function () {
   return {
      restrict:"AECM",
      templateUrl:"templates/firstTmpl.html",
      controller: function () {
      }
   }
});

myApp.directive("second", function () {
   return {
      //if don't using isolate scope model changed in one instance
      //directory will be appear in other instance
      scope:{

      },
      restrict:"AECM",
      templateUrl:"templates/firstTmpl.html",
      controller: function () {
      }
   }
});