var app = angular.module('fitbuddy', []);

app.controller('MainController', function($scope, $http, $interval){
$interval(function(){
  //Variabelen en arrays maken
  $scope.results  = [];
  $scope.filteredresults = [1];

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
	
	for (var i = 0; i < rlength; i++){
		nameadded = false;
			for (var y = 0; y < length; y++){
				//Kan niet aan voornaam en achternaam
				console.log($scope.results[y]);
				//TODO STUCK ON THE Y LOOP?
					//Keeps iterating over the same record ...
				if ($scope.results[y].voornaam == $scope.filteredresults.voornaam && $scope.results[y].achternaam == $scope.filteredresults.achternaam){
					nameadded = true;
					if ($scope.results[y].timestamp > $scope.filteredresults.timestamp)
						$scope.filteredresults.timestamp = $scope.results[y].timestamp;
						$scope.filteredresults.bpm = $scope.results[y].bpm;
						console.log("BPM update");
					}
					else {
						//Keep old one
						console.log("nikske");
					}
				}
				if (!nameadded) {
					$scope.filteredresults.push($scope.results[y]);
				//	console.log("result opgeslagen");
				}
			}
	});
  },2000);
});
