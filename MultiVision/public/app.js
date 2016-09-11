"use-strict";

angular.module("app", ["ngRoute", "ngResource", "home"]);

angular.module("app")
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when("/",
            {
                templateUrl: "home/home.html",
                controller: "HomeController"
            });
    });
