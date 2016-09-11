"use-strict";

angular.module("app", ["ngRoute", "ngResource"]);

angular.module("app")
    .controller("AppController",
        function($scope) {
            $scope.variable = "Hello Folks";
        });