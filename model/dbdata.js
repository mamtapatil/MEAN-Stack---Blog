var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/blogDb',function(){
	console.log("Connected to MongoDb.");
});

var homeSchema = new Schema(
	{
		title: { type: String},
		img: { type: String}
	}
);

var bookSchema = new Schema(
	{
		title: { type: String},
		author: { type: String},
		summary: { type: String},
		stars: { type: Number},
		img: { type: String}
	}
);

var foodSchema = new Schema(
	{
		title: { type: String},
		category: { type: String},
		img: { type: String},
		url: {type: String}
	}
);

var travelSchema = new Schema(
	{
		title: { type: String},
		url: { type: String},
		img: { type: String}
	}
);

var diySchema = new Schema(
	{
		title: { type: String},
		content: {type: String},
		img: { type: String}
	}
);

var healthSchema = new Schema(
	{
		title: { type: String},
		url: { type: String},
		img: { type: String}
	}
);

var movieSchema = new Schema(
	{
		title: { type: String},
		genre: { type: String},
		plot: { type: String},
		rating: { type: String},
		img: { type: String},
		url: {type: String},
		director: {tyoe: String},
		stars: {type:String}
	}
);

var beautySchema = new Schema(
	{
		title: { type: String},
		category: { type: String},
		url: { type: String},
		img: { type: String}
	}
);

var homeDecorSchema = new Schema(
	{
		title: { type: String},
		img: { type: String},
		url: {type: String}
	}
);

var tvSeriesSchema = new Schema(
	{
		title: { type: String},
		genre: { type: String},
		plot: { type: String},
		rating: { type: String},
		img: { type: String},
		url: {type: String},
		director: {tyoe: String},
		stars: {type:String}
	}
);

var Home = mongoose.model('Home', homeSchema, 'articles');
var Book = mongoose.model('Book', bookSchema, 'booksArray');
var Food = mongoose.model('Food', foodSchema, 'foodArray');
var Travel = mongoose.model('Travel', travelSchema, 'travelArray');
var Diy = mongoose.model('Diy', diySchema, 'diyArray');
var Health = mongoose.model('Health', healthSchema, 'healthArray');
var Movie = mongoose.model('Movies', movieSchema, 'movieArray');
var Beauty = mongoose.model('Beauty', movieSchema, 'beautyArray');
var TVSeries = mongoose.model('TVSeries', movieSchema, 'tvSeriesArray');
var HomeDecor = mongoose.model('HomeDecor', movieSchema, 'homeDecorArray');

module.exports = {
	Home: Home,
	Book: Book,
	Food: Food,
	Travel: Travel,
	Diy: Diy,
	Health: Health,
	Movie: Movie,
	Beauty: Beauty,
	TVSeries: TVSeries,
	HomeDecor: HomeDecor
};