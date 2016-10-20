var app = angular.module('userProfiles');

//.controller establishes what's within the function as a controller
//'MainController' is the name of the controller we use to reference it throughout the program
//inside the func's parameters $scope makes it so 
app.controller('MainController', function($scope, mainService) {
    $scope.getUsers = function () {
        mainService.getUsers().then(function (dataFromService) {
            $scope.users = dataFromService;
        });
    }
    $scope.getUsers();
});