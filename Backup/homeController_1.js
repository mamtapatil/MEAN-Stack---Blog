
angular.module('controllerModule', ['serviceModule'])

   .controller("homeController", function ($scope, $http, getData) {
      var content = getData.getMainArticles();
      content.success(function(data){
         $scope.articles = data;
      });
      content.error(function(data,status){
         console.log("Error while retrieving data from the database" + status, data);
      });
      var numberContent = getData.getBookArticles();
      numberContent.success(function(data){
         $scope.articles[0].number = data.length;
         console.log($scope.articles.number); 
         console.log($scope.articles);
      });
      numberContent.error(function(data,status){
         console.log("Error while retrieving data from the database" + status, data);
      });
      console.log("Outside" + $scope.number); 
	})

   .controller("bookController", function ($scope, $http, getData) {
   	var refresh = function() {
         var content = getData.getBookArticles();
         content.success(function(data){
            $scope.booksArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database" + status, data);
         });
      };
      refresh();
      $scope.book = {};
      $scope.addBook = function() {
         console.log($scope.book);
         $http.post('/book', $scope.book).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            refresh();
         });
      };
	})

	.controller("foodController", function ($scope, $http, getData) {
   	var refresh =  function() {
         var content = getData.getFoodArticles();
         content.success(function(data){
            $scope.foodArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database" + status, data);
         });
      };
      refresh();
      $scope.food = {};
      $scope.addFood = function() {
         console.log($scope.food);
         $http.post('/food', $scope.food).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            refresh();
         });
      };         
   })

	.controller("moviesController", function ($scope, $http, getData) {
   	var refresh = function(){
         var content = getData.getMovieArticles();
         content.success(function(data){
            $scope.moviesArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database" + status, data);
         });
      };
      refresh();
      $scope.movie = {};
      $scope.addMovie = function(){
         console.log($scope.movie);
         $http.post('/movie', $scope.movie).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            refresh();
         });
      };
   })

	.controller("travelController", function ($scope, $http, getData) {
   	var refresh = function(){
         var content = getData.getTravelArticles();
         content.success(function(data){
            $scope.travelArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database" + status, data);
         });
      };
      refresh();
      $scope.travel = {};
      $scope.addTravel = function(){
         console.log($scope.travel);
         $http.post('/travel', $scope.travel).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            refresh();
         });
      };      
   })

	.controller("healthController", function ($scope, $http, getData) {
   	var refresh = function(){
         var content = getData.getHealthArticles();
         content.success(function(data){
            $scope.healthArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database" + status, data);
         });
      };	
      refresh();
      $scope.health = {};
      $scope.addHealth = function(){
         console.log($scope.health);
         $http.post('/health', $scope.health).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            refresh();
         });
      };      
   })

	.controller("diyController", function ($scope, $http, getData) {
   	var refresh = function(){
         var content = getData.getDiyArticles();
         content.success(function(data){
            $scope.diyArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database" + status, data);
         });
      };	
      refresh();
      $scope.diy = {};
      $scope.addDiy = function(){
         console.log($scope.diy);
         $http.post('/diy', $scope.diy).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            refresh();
         });
      };      
   });
