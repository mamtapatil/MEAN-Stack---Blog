var app = angular.module('bookApp',['controllerModule','directiveModule','serviceModule','ui.router','ngAnimate','ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider 
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'homeController'			
		})
		.state('Books', {
			url: '/book',
			templateUrl: 'views/books.html',
			controller: 'bookController'
		})
		.state('DIY - Crafts', {
			url: '/diy',
			templateUrl: 'views/diy.html',
			controller: 'diyController'
		})
		.state('Food', {
			url: '/food',
			templateUrl: 'views/food.html',
			controller: 'foodController'
		})
		.state('Movies', {
			url: '/movies',
			templateUrl: 'views/movies.html',
			controller: 'moviesController'
		})
		.state('Travel', {
			url: '/travel',
            templateUrl: 'views/travel.html',
			controller: 'travelController'
		})
		.state('Health', {
			url: '/health',
			templateUrl: 'views/health.html',
			controller: 'healthController'
		})
		.state('Home Decor', {
			url: '/homeDecor',
            templateUrl: 'views/homeDecor.html',
			controller: 'homeDecorController'
		})
		.state('Beauty', {
			url: '/beauty',
            templateUrl: 'views/beauty.html',
			controller: 'beautyController'
		})
		.state('TV Series', {
			url: '/tvSeries',
            templateUrl: 'views/tvSeries.html',
			controller: 'tvSeriesController'
		})
		.state('Washington', {
			url: '/travel/washington',
            templateUrl: 'views/travel/washington.html',
			controller: 'travelController'
		})
		.state('Las Vegas', {
			url: '/travel/lasvegas',
			templateUrl: 'views/travel/washington.html',
			controller: 'travelController'
		})
		.state('Yosemite', {
			url: '/travel/yosemite',
			templateUrl: 'views/travel/yosemite.html',
			controller: 'travelController'
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





