var app = angular.module('fitbuddy', []);

app.controller('MainController', function($scope, $http, $interval, $interval){
$interval(function(){
  $scope.results  = [];
  $scope.filteredresults = [];
  $http.get("http://188.226.148.45:3000/api/data").then(function (res){
    $scope.results = res.data;
    console.log($scope.results);
//	console.log($scope.results.voornaam);
    //console.log(res);
});
  },2000);
/*
$scope.naam = "maarten";
  $http.post("http://188.226.148.45:3000/api/data",
  { 'timestamp' : $scope.date, 'voornaam' : $scope.naam, 'achternaam' : $scope.achternaam, 'bpm' : $scope.bpm }).then(function (res) {
    $scope.result = res;
  })*/
});
