"use-strict";

angular.module("home", ["authentication"])
    .controller("HomeController",
        function($scope) {
            $scope.variable = "Hello Folks";
        });