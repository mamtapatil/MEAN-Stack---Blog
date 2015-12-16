
angular.module('controllerModule', ['serviceModule', 'modalModule'])

   .controller("homeController", function ($scope, $http, getData) {
      var content = getData.getMainArticles();
      content.success(function(data){
         $scope.articles = data;
      });
      content.error(function(data,status){
         console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
      });
	})

   .controller("bookController", function ($scope, $http, getData) {
   	var refresh = function() {
         var content = getData.getBookArticles();
         content.success(function(data){
            $scope.booksArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
         });
      };
      refresh();
      $scope.book = {};
      $scope.addBook = function() {
         console.log($scope.book);
         $http.post('/book', $scope.book).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            $scope.submit = true;
            refresh();
         });
         $scope.book={};
      };
	})

	.controller("foodController", function ($scope, $http, getData, $uibModal) {
   	var refresh =  function() {
         var content = getData.getFoodArticles();
         content.success(function(data){
            $scope.foodArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
         });
      };
      refresh();
      $scope.food = {};
      $scope.addFood = function() {
         console.log($scope.food);
         $http.post('/food', $scope.food).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            $scope.submit = true;
            refresh();
         });
         $scope.food = {};
      };
      $scope.open = function(title) {
         console.log(title);
         var content = getData.getFoodDetails(title);
         content.success(function(data){
            $scope.foodDetails = data;
            var modalInstance = $uibModal.open({
               templateUrl: '../views/modal/foodModal.html',
               controller: 'foodModalController',
               resolve: {
                  foodDetail : function() {
                     return $scope.foodDetails;
                  }
               }
            });
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
         });       
      };         
   })

	.controller("moviesController", function ($scope, $http, getData, $uibModal) {
   	var refresh = function(){
         var content = getData.getMovieArticles();
         content.success(function(data){
            $scope.moviesArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
         });
      };
      refresh();
      $scope.movie = {};
      $scope.addMovie = function(){
         console.log($scope.movie);
         $http.post('/movie', $scope.movie).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            $scope.submit = true;
            refresh();
         });
         $scope.movie = {};
      };
      $scope.open = function(title) {
         console.log(title);
         var content = getData.getMovieDetails(title);
         content.success(function(data){
            $scope.moviedetails = data;
            var modalInstance = $uibModal.open({
               templateUrl: '../views/modal/movieModal.html',
               controller: 'movieModalController',
               resolve: {
                  moviedetail : function() {
                     return $scope.moviedetails;
                  }
               }
            });
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
         });       
      };
   })

	.controller("travelController", function ($scope, $http, getData) {
      var content = getData.getTravelArticles();
      content.success(function(data){
         $scope.travelArray = data;
      });
      content.error(function(data,status){
         console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
      });     
   })

	.controller("healthController", function ($scope, $http, getData) {
   	var refresh = function(){
         var content = getData.getHealthArticles();
         content.success(function(data){
            $scope.healthArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
         });
      };	
      refresh();
      $scope.health = {};
      $scope.addHealth = function(){
         console.log($scope.health);
         $http.post('/health', $scope.health).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            $scope.submit = true;
            refresh();
         });
         $scope.health = {};
      };      
   })

	.controller("diyController", function ($scope, $http, getData) {
   	var refresh = function(){
         var content = getData.getDiyArticles();
         content.success(function(data){
            $scope.diyArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
         });
      };	
      refresh();
      $scope.diy = {};
      $scope.addDiy = function(){
         console.log($scope.diy);
         $http.post('/diy', $scope.diy).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            $scope.submit = true;
            refresh();
         });
         $scope.diy = {};
      };      
   })

   .controller("beautyController", function ($scope, $http, getData) {
      var refresh = function(){
         var content = getData.getBeautyArticles();
         content.success(function(data){
            $scope.beautyArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
         });
      }; 
      refresh();
      $scope.beauty = {};
      $scope.addBeauty = function(){
         console.log("Inside addbeauty module" + JSON.stringify($scope.beauty));
         $http.post('/beauty', $scope.beauty).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            $scope.submit = true;
            refresh();
         });
         $scope.beauty = {};
      };      
   })

   .controller("homeDecorController", function ($scope, $http, getData) {
      var refresh = function(){
         var content = getData.getHomeDecorArticles();
         content.success(function(data){
            $scope.homeDecorArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
         });
      }; 
      refresh();
      $scope.homeDecor = {};
      $scope.addHomeDecor = function(){
         console.log($scope.homeDecor);
         $http.post('/homeDecor', $scope.homeDecor).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            $scope.submit = true;
            refresh();
         });
         $scope.homeDecor = {};
      };      
   })

   .controller("tvSeriesController", function ($scope, $http, getData) {
      var refresh = function(){
         var content = getData.getTVSeriesArticles();
         content.success(function(data){
            $scope.tvSeriesArray = data;
         });
         content.error(function(data,status){
            console.log("Error while retrieving data from the database. Error Status: " + status + ". Error message:  " + data);
         });
      }; 
      refresh();
      $scope.series = {};
      $scope.addTvSeries = function(){
         console.log($scope.series);
         $http.post('/tvSeries', $scope.series).success(function(response){
            console.log("Data successfully inserted in the database");
            console.log(response);
            $scope.submit = true;
            refresh();
         });
         $scope.series = {};
      };      
   })


