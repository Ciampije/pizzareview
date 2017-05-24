console.log('app.js');

var app = angular.module('MyApp', []);

app.controller('mainController', ['$http', function($http){
    this.message = "angular works!";
    var controller = this;

    this.getRestaurants = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/restaurants'
        }).then(function(result){
            console.log(result);
            controller.restaurants = result.data;
            console.log(controller.restaurants);
        });
    };
    this.getRestaurants();
}]);
