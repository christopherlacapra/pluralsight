"use-strict";

angular.module("home", [])
    .controller("HomeController",
        function($scope) {
            $scope.variable = "Hello Folks";
        });