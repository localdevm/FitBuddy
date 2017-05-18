var app = angular.module('fitbuddy', []);

app.controller('MainController', function($scope, $http, $interval){
  $scope.result  = [];
  $http.get("http://188.226.148.45:3000/api/data").then(function (res){
    $scope.result = res.data;
    console.log(res);
    $scope.naam = res.voornaam;
	console.log($scope.naam);
  });
/*
$scope.naam = "maarten";
  $http.post("http://188.226.148.45:3000/api/data",
  { 'timestamp' : $scope.date, 'voornaam' : $scope.naam, 'achternaam' : $scope.achternaam, 'bpm' : $scope.bpm }).then(function (res) {
    $scope.result = res;
  })*/
});
