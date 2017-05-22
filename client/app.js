var app = angular.module('fitbuddy', []);

app.controller('MainController', function($scope, $http, $interval){
$interval(function(){
  //Variabelen en arrays maken
  $scope.results  = [];
  $scope.filteredresults = [];

  //GET our data
  $http.get("http://188.226.148.45:3000/api/data").then(function (res){
    $scope.results = res.data;
	//Debugging
   rlength = $scope.results.length;
   length = $scope.filteredresults.length;
    console.log($scope.results);
    console.log(length); 
    console.log("array grootte");
    console.log(rlength);
	
	for (var i = 0; i = rlength; i++){
		nameadded = false;
		console.log("wuuut");
			for (var y = 0; y = length; y++){
				if (result.voornaam == filteredresult.voornaam && result.achternaam == filteredresult.achternaam){
					console.log("test");
					nameadded = true;
					if (result.timestamp > filteredresult.timestamp){
						filteredresult.timestamp = result.timestamp;
						filteredresult.bpm = result.bpm;
					}
					else {
						//Keep old one
					}
				}
				if (!nameadded) {
					filteredresults.push(result);
				}
			}
	}
    
});
  },2000);
});
