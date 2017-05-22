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
		//Iterate over results	
	for (var i = 0; i < rlength; i++){
		var nameadded = false;
			//Iterate over filtered results
			for (var y = 0; y < length; y++){
//LOGIC ERROR SOMEWHERE IN HERE >
				if ($scope.results[i].voornaam == $scope.filteredresults.voornaam && $scope.result[i].achternaam == $scope.filteredresults.achternaam){
					nameadded = true;
					if ($scope.results[i].timestamp > $scope.filteredresults[y].timestamp)
						$scope.filteredresults[y].timestamp = $scope.results[i].timestamp;
						$scope.filteredresults[y].bpm = $scope.results[i].bpm;
						console.log("BPM update");
					}
					else {
						//Keep old one
					}
				}
				if (!nameadded) {
					$scope.filteredresults.push($scope.results[i]);
					console.log("filtered");
					console.log($scope.filteredresults);
				}
//< LOGIC ERROR SOMEWHERE IN THERE
			}
	});
  },2000);
});
