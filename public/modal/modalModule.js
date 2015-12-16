angular.module('modalModule',[])
	.controller('movieModalController',function ($scope, $uibModalInstance, moviedetail) {
		$scope.moviedetails = moviedetail;
		$scope.close = function() {
			console.log("inside close");
			$uibModalInstance.close();
		};
	})
	.controller('foodModalController',function ($scope, $uibModalInstance, foodDetail) {
		$scope.foodDetails = foodDetail;
		$scope.close = function() {
			console.log("inside close");
			$uibModalInstance.close();
		};
	});