var app = angular.module('bookApp',['controllerModule','ui.router','ngAnimate','ui.bootstrap']);

app.controller('mainCtrl',function($scope){
	$scope.addCategory = function(){
		console.log("inside the controller");
		var obj = {
			title: $scope.categoryForm.category ,
			number: 0,
			img: $scope.categoryForm.imgUrl,
		};
		$scope.articles.push(obj);
	} 
});

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider 
		.state('/home', {
			url: '/home',
			views: {
				'mainView' : {
					templateUrl: 'views/home.html',
					controller: 'homeController'
				}
			}			
		})
		.state('Books', {
			url: '/book',
			views: {
				'navView' : {
					templateUrl: 'views/nav.html'
				},
				'mainView' : {
					templateUrl: 'views/books.html',
					controller: 'bookController'
				}
			}
		})
		.state('DIY - Crafts', {
			url: '/diy',
			views: {
				'navView' : {
					templateUrl: 'views/nav.html'
				},
				'mainView' : {
					templateUrl: 'views/diy.html',
					controller: 'diyController'
				}
			}
		})
		.state('Food', {
			url: '/food',
			views: {
				'navView' : {
					templateUrl: 'views/nav.html'
				},
				'mainView' : {
					templateUrl: 'views/food.html',
					controller: 'foodController'
				}
			}
		})
		.state('Movies', {
			url: '/movies',
			views: {
				'navView' : {
					templateUrl: 'views/nav.html'
				},
				'mainView' : {
					templateUrl: 'views/movies.html',
					controller: 'moviesController'
				}
			}
		})
		.state('Travel', {
			url: '/travel',
			views: {
				'navView' : {
					templateUrl: 'views/nav.html'
				},
				'mainView' : {
					templateUrl: 'views/travel.html',
					controller: 'travelController'
				}
			}
		})
		.state('Health', {
			url: '/health',
			views: {
				'navView' : {
					templateUrl: 'views/nav.html'
				},
				'mainView' : {
					templateUrl: 'views/health.html',
					controller: 'healthController'
				}
			}
		})
		.state('Washington', {
			url: '/travel/washington',
			views: {				
				'mainView' : {
					templateUrl: 'views/travel/washington.html',
					controller: 'travelController'
				}
			}
		})
		.state('Las Vegas', {
			url: '/travel/lasvegas',
			views: {
				'navView' : {
					templateUrl: 'views/nav.html'
				},
				'mainView' : {
					templateUrl: 'views/travel/washington.html',
					controller: 'travelController'
				}
			}
		})
		.state('Yosemite', {
			url: '/travel/yosemite',
			views: {
				'navView' : {
					templateUrl: 'views/nav.html'
				},
				'mainView' : {
					templateUrl: 'views/travel/yosemite.html',
					controller: 'travelController'
				}
			}
		})
		.state('Atlanta', {
			url: '/travel/atlanta',
			templateUrl: 'views/travel/atlanta.html',
			controller: 'travelController'
		})
		.state('San Francisco', {
			url: '/travel/sanfrancisco',
			templateUrl: 'views/travel/sanfrancisco.html',
			controller: 'travelController'
		})
		.state('Charleston', {
			url: '/travel/charleston',
			templateUrl: 'views/travel/charleston.html',
			controller: 'travelController'
		})
		.state('Orlando', {
			url: '/health/orlando',
			templateUrl: 'views/travel/orlando.html',
			controller: 'healthController'
		});
		  $locationProvider
        .html5Mode(true)
        .hashPrefix('!');
        
    });

app.directive('igLogin', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/modal.html' ,


               
        
    };
});





