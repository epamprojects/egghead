var myApp = angular.module("myApp", []);


myApp.directive("first", function () {
   return {
      restrict:"E",
      scope:{},
      templateUrl:"templates/firstTmpl.html",
      // if don't set in scope wich data will be visible
      // in directive NEEDED SET IN IN LINK
      link: function (scope, element, attrs) {
         scope.flavor = attrs.flavor;
      }
   }
});


myApp.directive("second", function () {
   return {
      restrict:"E",
      // if  set in scope wich data will be visible
      // in directive DON'T NEEDED SET IN LINK
      scope:{
         flavor:"@"
      },
      templateUrl:"templates/firstTmpl.html"
   }
});

