var myApp = angular.module("myApp", [])

    .directive("dumpPassword1", function () {
        return {
            templateUrl: "templates/firstTmpl.html",
            // work with element custom tag or it nested data
            // if false  -> element this is "dump-password"
            // if true  -> element this is "div.container"
            replace: true,
            scope:{},
            link: function (scope, element) {
                scope.$watch("model.input", function (value) {
                    if (value === "password") {
                        // elem - this is jqueryLite (easy jQuery)
                        element.find("input").next().addClass("alert alert-success")
                    } else {
                        element.find("input").next().removeClass("alert alert-success")
                    }
                })
            }
        }
    })

    .directive("dumpPassword2", function () {
        var validElement =  angular.element("<div class='valid'>{{model.input}}</div>");
        return {
            templateUrl: "templates/secondTmpl.html",
            replace: true,

            // if using this function it is possible to add
            // addition DOM to directive
            // as result link will be using as result of return compile anonymous function
            compile: function (tElem) {
                tElem.append(validElement);

                return function (scope, element) {
                    scope.$watch("model.input", function (value) {
                        if (value === "password") {
                            // angular allow work with adding element in in a manner
                            validElement.addClass("alert alert-success")
                        } else {
                            validElement.removeClass("alert alert-success")
                        }
                    })
                }
            }
        }
    });

