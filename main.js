var express = require('express');
//var handlerModule = require('./handlers/handlerModule');

var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var dbdata = require("./model/dbdata");


app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

//All the Get requests for the server

app.get('/home', function(req,res){
	console.log('I GET request');
	dbdata.Home.find(function(err,data){
		console.log(data);
		res.json(data);
	});
});


app.get('/book', function(req,res){
	console.log('I GET request');
	dbdata.Book.find(function(err,data){
		res.json(data);
	});
});

app.get('/food', function(req,res){
	console.log('I GET request');
	dbdata.Food.find(function(err,data){
		console.log(data);
		res.json(data);
	});
});

app.get('/travel', function(req,res){
	console.log('I GET request');
	dbdata.Travel.find(function(err,data){
		console.log(data);
		res.json(data);
	});
});

app.get('/diy', function(req,res){
	console.log('I GET request');
	dbdata.Diy.find(function(err,data){
		console.log(data);
		res.json(data);
	});
});

app.get('/health', function(req,res){
	console.log('I GET request');
	dbdata.Health.find(function(err,data){
		console.log(data);
		res.json(data);
	});
});
	

app.get('/movie', function(req,res){
	console.log('I GET request');
	dbdata.Movie.find(function(err,data){
		console.log(data);
		res.json(data);
	});
});

app.get('/beauty', function(req,res){
	console.log('I GET request');
	dbdata.Beauty.find(function(err,data){
		console.log(data);
		res.json(data);
	});
});

app.get('/tvSeries', function(req,res){
	console.log('I GET request');
	dbdata.TVSeries.find(function(err,data){
		console.log(data);
		res.json(data);
	});
});

app.get('/homeDecor', function(req,res){
	console.log('I GET request');
	dbdata.HomeDecor.find(function(err,data){
		console.log(data);
		res.json(data);
	});
});
app.get('/movie/:moviename', function(req,res){
	console.log('I GET request');
	console.log(req.params.moviename);
	dbdata.Movie.findOne({'title': req.params.moviename},function(err,data){
		console.log(data);
		res.json(data);
	});
});

app.get('/food/:foodTitle', function(req,res){
	console.log('I GET request');
	console.log(req.params.moviename);
	dbdata.Food.findOne({'title': req.params.foodTitle},function(err,data){
		console.log(data);
		res.json(data);
	});
});

// All the POST Requests to the server

app.post('/home', function(req,res){
	console.log('I got POst req');
	console.log(req.body);
	var newdata = new dbdata.Home({
		title: req.body.title,
		number: 0,
		img:req.body.image
	});
	newdata.save(function(err, resp){
		if(err) {
			return console.log(err);
		}
		console.log(resp);
		res.json(resp);
	});
});

app.post('/book', function(req,res){
	console.log('Post req for Book');
	console.log(req.body);
	var newdata = new dbdata.Book({
		title: req.body.title,
		author: req.body.author,
		summary: req.body.summary,
		stars: req.body.rating,
		img:req.body.img
	});
	newdata.save(function(err, resp){
		if(err) {
			return console.log(err);
		}
		console.log(resp);
		res.json(resp);
	});
});

app.post('/health', function(req,res){
	console.log('Post req for Health page');
	console.log(req.body);
	var newdata = new dbdata.Health({
		title: req.body.title,
		url: req.body.url,
		img: req.body.img
	});
	newdata.save(function(err, resp){
		if(err) {
			return console.log(err);
		}
		console.log(resp);
		res.json(resp);
	});
});

app.post('/food', function(req,res){
	console.log('Post req for Food page');
	console.log(req.body);
	var newdata = new dbdata.Food({
		title: req.body.title,
		category: req.body.category,
		img:req.body.img,
		url:req.body.url
	});
	newdata.save(function(err, resp){
		if(err) {
			return console.log(err);
		}
		console.log(resp);
		res.json(resp);
	});
});

app.post('/diy', function(req,res){
	console.log('Post req for Diy page');
	console.log(req.body);
	var newdata = new dbdata.Diy({
		title: req.body.title,
		content: req.body.content,
		img:req.body.img
	});
	newdata.save(function(err, resp){
		if(err) {
			return console.log(err);
		}
		console.log(resp);
		res.json(resp);
	});
});

app.post('/movie', function(req,res){
	console.log('Post req for Movies');
	console.log(req.body);
	var newdata = new dbdata.Movie({
		title: req.body.title,
		genre: req.body.genre,
		plot: req.body.plot,
		rating: req.body.rating,
		img:req.body.img,
		stars:req.body.stars,
		director:req.body.director,
		url:req.body.url

	});
	newdata.save(function(err, resp){
		if(err) {
			return console.log(err);
		}
		console.log(resp);
		res.json(resp);
	});
});

app.post('/beauty', function(req,res){
	console.log('Post req for Beauty');
	console.log(req.body);
	var newdata = new dbdata.Beauty({
		title: req.body.title,
		category: req.body.category,
		img:req.body.img,
		url:req.body.url

	});
	newdata.save(function(err, resp){
		if(err) {
			return console.log(err);
		}
		console.log(resp);
		res.json(resp);
	});
});

app.post('/tvSeries', function(req,res){
	console.log('Post req for TVSeries');
	console.log(req.body);
	var newdata = new dbdata.TVSeries({
		title: req.body.title,
		genre: req.body.genre,
		plot: req.body.plot,
		rating: req.body.rating,
		img:req.body.img,
		stars:req.body.stars,
		director:req.body.director,
		url:req.body.url

	});
	newdata.save(function(err, resp){
		if(err) {
			return console.log(err);
		}
		console.log(resp);
		res.json(resp);
	});
});

app.post('/homeDecor', function(req,res){
	console.log('Post req for Home Decor');
	console.log(req.body);
	var newdata = new dbdata.HomeDecor({
		title: req.body.title,
		img:req.body.img,
		url:req.body.url

	});
	newdata.save(function(err, resp){
		if(err) {
			return console.log(err);
		}
		console.log(resp);
		res.json(resp);
	});
});

app.listen(3200);
console.log('Connection established!');