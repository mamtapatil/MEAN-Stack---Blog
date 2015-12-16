angular.module('directiveModule', [])
	
	.directive('isUrl', function ($compile){
		return {
			restrict: 'E',
			template: '<img class="contentImage" ng-src="{{item.img}}" alt="" ng-if="ifCondition">'+
					  '<img class="contentImage" ng-src="images/{{item.img}}" alt="" ng-if="!ifCondition">',
			link: function($scope, $element) {
				$scope.ifCondition = false;
				var url = $scope.item.img;
				if (url.match(/^http/g)) {
					$scope.ifCondition = true;
				}
			}
		};
	});

