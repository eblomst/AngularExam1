var app = angular.module('MyModule', ['ngRoute']);

var users = [];
app.controller("UserController", function ($http, $routeParams) {
    var self = this;
    self.indexNumber = 0;
    if (users.length === 0) {
        $http.get("data/data.json").success(function (data) {
            users = data.users;
            self.users = users;
        });
    } else { //We used the cache property on the http request instead self.users = users;
    }
    if (users != null) {
//        console.log("Adding user: " + $routeParams.id);
        self.user = users[$routeParams.id];
    }
});

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "list.html"
        }).when('/id', {
            templateUrl: "details.html"
        });
}]);
