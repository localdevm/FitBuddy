var app = angular.module('fitbuddy', []);

app.controller('MainController', function($scope, $http){
  $scope.result  = [];
  $http.get("http://localhost:3000/api/data").success(function (res){
    $scope.result = res;
  });
});
