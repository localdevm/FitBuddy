var app = angular.module('fitbuddy', []);

app.controller('MainController', function($scope, $http){
  $scope.result  = [];
  $http.get("http://188.226.148.45:3000/api/data").then(function (res){
    $scope.result = res;
    console.log(res);
    $scope.naam = "Joske";
  });
});
