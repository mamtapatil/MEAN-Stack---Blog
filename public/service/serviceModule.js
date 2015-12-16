angular.module('serviceModule',[])
	.factory('getData',function($http){
		return {
			getMainArticles: function(){
				console.log("Inside service module of main article");
				var mainArticles = $http({method: 'GET' , url : '/home'});
				console.log(mainArticles);
   		   		return mainArticles;
   		   	},
			getBookArticles: function(){
				console.log("Inside service module of book article");
				var bookArticles = $http({method: 'GET' , url : '/book'});
				console.log(bookArticles);
   		   		return bookArticles;
   		   	},
   		   	getFoodArticles: function(){
				console.log("Inside service module of food article");
				var foodArticles = $http({method: 'GET' , url : '/food'});
				console.log(foodArticles);
   		   		return foodArticles;
   		   	},
   		   	getHealthArticles: function(){
				console.log("Inside service module of main article");
				var healthArticles = $http({method: 'GET' , url : '/health'});
				console.log(healthArticles);
   		   		return healthArticles;
   		   	},
   		   	getTravelArticles: function(){
				console.log("Inside service module of travel article");
				var travelArticles = $http({method: 'GET' , url : '/travel'});
				console.log(travelArticles);
   		   		return travelArticles;
   		   	},
   		   	getMovieArticles: function(){
				console.log("Inside service module of movie article");
				var movieArticles = $http({method: 'GET' , url : '/movie'});
				console.log(movieArticles);
   		   		return movieArticles;
   		   	},
   		   	getDiyArticles: function(){
				console.log("Inside service module of diy article");
				var diyArticles = $http({method: 'GET' , url : '/diy'});
				console.log(diyArticles);
   		   		return diyArticles;
   		   	},
   		   	getTVSeriesArticles: function(){
				console.log("Inside service module of tvseries article");
				var tvseriesArticles = $http({method: 'GET' , url : '/tvSeries'});
				console.log(tvseriesArticles);
   		   		return tvseriesArticles;
   		   	},
   		   	getBeautyArticles: function(){
				console.log("Inside service module of beauty article");
				var beautyArticles = $http({method: 'GET' , url : '/beauty'});
				console.log("Inside service: " + beautyArticles);
   		   		return beautyArticles;
   		   	},
   		   	getHomeDecorArticles: function(){
				console.log("Inside service module of tvseries article");
				var homeDecorArticles = $http({method: 'GET' , url : '/homeDecor'});
				console.log(homeDecorArticles);
   		   		return homeDecorArticles;
   		   	},
   		   	getMovieDetails:function(title){
   		   		console.log("Indise service module of movie details");
   		   		console.log("From service " + title);
   		   		var moviedetail = $http({method: 'GET', url: '/movie/' +title});
				console.log(moviedetail);
				return moviedetail;
   		   	},
   		   	getFoodDetails:function(title){
   		   		console.log("Indise service module of food details");
   		   		var foodDetail = $http({method: 'GET', url: '/food/' +title});
				console.log(foodDetail);
				return foodDetail;
   		   	}
   		}
	});