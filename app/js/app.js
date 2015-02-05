;
(function () {
    "use strict";

    var app = angular.module("weatherApp", [
        "ngRoute",
        "ngAnimate",
        "ngMessages"
    ]);

    app.config(["$routeProvider", function ($routeProvider) {
            $routeProvider
                    .when("/home", {
                        templateUrl: "app/templates/home.html",
                        controller: "HomeController"
                    })
                    .otherwise({
                        redirectTo: "/home"
                    });
        }]);

    return app;
    
})();