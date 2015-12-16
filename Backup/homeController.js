
angular.module('controllerModule', [])


   .controller("homeController", function ($scope,$http) {
   	$http.get('/home').success(function(response){
   		console.log("got dat");
   		$scope.articles = response;
   	});
/*	$scope.articles = [
	{ 
		title: 'Books',
		number: 12,
		img: 'books.jpg'
	},
			{
		title: 'Health',
		number: 5,
		img: 'health.jpg'
	},
	{
		title: 'Food',
		number: 8,
		img: 'food.jpg'	},
	{
		title: 'Travel',
		number: 4,
		img: 'travel.jpg'
	},
		{
		title: 'Movies',
		number: 15,
		img: 'movies.jpg'
	},

		{
		title: 'DIY - Crafts',
		number: 17,
		img: 'diy.jpg'
	}
	]; */

})
   .controller("bookController", function ($scope) {

	$scope.booksArray = [
	
			{
		title: "Chanakya's Chant",
		author: 'Ashwin Sanghi',
		summary: 'The year is 340 BC. A hunted, haunted Brahmin youth vows revenge for the gruesome' + 
		'murder of his beloved father. Cold, calculating, cruel and armed with a complete absence of' + 
		'accepted morals, he becomes the most powerful political strategist in Bharat and succeeds in' + 
		'uniting a ragged country against the invasion of the army of that demigod, Alexander the Great.' + 
		'Pitting the weak edges of both forces against each other, he pulls off a wicked and astonishing ' + 
		'victory and succeeds in installing Chandragupta on the throne of the mighty Mauryan empire.' + 
		'History knows him as the brilliant strategist Chanakya. Satisfied—and a little bored—by his' +  
		'success as a kingmaker, through the simple summoning of his gifted mind, he recedes into the' +  
		'shadows to write his Arthashastra, the ‘science of wealth’. But history, which exults in ' + 
		'repeating itself, revives Chanakya two and a half millennia later, in the avatar of Gangasagar' + 
		'Mishra, a Brahmin teacher in smalltown India who becomes puppeteer to a host of ambitious ' + 
		'individuals—including a certain slumchild who grows up into a beautiful and powerful woman.' + 
		'Modern India happens to be just as riven as ancient Bharat by class hatred, corruption and ' + 
		'divisive politics and this landscape is Gangasagar’s feasting ground. Can this wily pandit—who' + 
		'preys on greed, venality and sexual deviance—bring about another miracle of a united India?' + 
		'Will Chanakya’s chant work again? Ashwin Sanghi, the bestselling author of The Rozabal Line,' +  
		'brings you yet another historical spinechiller.',
		stars:4,
		img:'chants.jpg'
	},
	{
		title: 'Kane and Able',
		author: 'Jeffery Archer',
		summary: 'Born on the same day near the turn of the century on opposite sides of the world,' +
		' both men are brought together by fate and the quest of a dream. These two men -- ambitious,' + 
		'powerful, ruthless -- are locked in a relentless struggle to build an empire, fuelled by their ' + 
		'all-consuming hatred. Over 60 years and three generations, through war, marriage, fortune, and disaster, ' + 
		'Kane and Abel battle for the success and triumph that only one man can have.',
		stars: 5,
		img:'kane.jpg'
	},
		{
		title: "A walk to remember",
		author: 'Nicholas Sparks',
		summary: 'Every April, when the wind blows from the sea and mingles with the scent of lilacs, Landon Carter ' + 
		'remembers his last year at Beaufort High. It was 1958, and Landon had already dated a girl or two. ' + 
		'He even swore that he had once been in love. Certainly the last person in town he thought he\'d fall for was Jamie Sullivan, '+
		' the daughter of the town\'s Baptist minister. A quiet girl who always carried a Bible with her schoolbooks, Jamie seemed ' + 
		'content living in a world apart from the other teens. She took care of her widowed father, rescued hurt animals, and helped '+ 
		'out at the local orphanage. No boy had ever asked her out. Landon would never have dreamed of it. Then a twist of fate made ' + 
		'Jamie his partner for the homecoming dance, and Landon Carter\'s life would never be the same. Being with Jamie would show him ' + 
		' the depths of the human heart and lead him to a decision so stunning it would send him irrevocably on the road to manhood...' +
        '\n Did You Know?- \n That Jamie was named after Nicholas\'s editor, Jamie Raab? \n That Landon is the name of his third son?\n' +
		'That Nicholas Sparks recorded his own reading for the audio version of the novel?',
		stars:4,
		img:'walk.jpg'
	},

	{
		title: 'Immortals of Meluha',
		author: 'Amish',
		summary: '1900 BC. In what modern Indians mistakenly call the Indus Valley Civilisation. The inhabitants of that period called  ' + 
		'it the land of Meluha a near perfect empire created many centuries earlier by Lord Ram, one of the greatest monarchs that ever lived. ' + 
		'This once proud empire and its Suryavanshi rulers face severe perils as its primary river, the revered Saraswati, is slowly drying ' + 
		'to extinction. They also face devastating terrorist attacks from the east, the land of the Chandravanshis. To make matters worse, the ' + 
		' Chandravanshis appear to have allied with the Nagas, an ostracised and sinister race of deformed humans with astonishing martial skills! ' +
		'The only hope for the Suryavanshis is an ancient legend: When evil reaches epic proportions, when all seems lost, when it appears that ' +
		'your enemies have triumphed, a hero will emerge.\n \n Is the rough-hewn Tibetan immigrant Shiva, really that hero? And does he want to ' +
		' be that hero at all? Drawn suddenly to his destiny, by duty as well as by love, will Shiva lead the Suryavanshi vengeance and destroy evil?',
		stars:3,
		img:'meluha.jpg'
	},
		{
		title: 'The Prodigal Daughter',
		author: 'Jeffery Archer',
		summary: 'With a will of steel, Polish immigrant Florentyna Rosnovski is indeed Abel\'s daughter. She shares with her father a love ' +
		'of America, his ideals, and his dream for the future. But she wants more to be the first female president.\n \n ' +
		'Golden boy Richard Kane was born into a life of luxury. The scion of a banking magnate he is successful, handsome, and determined  ' + 
		'to carve his own path in the world-and to build a future with the woman he loves. \n With Florentyna\'s ultimate goal only a heartbeat ' +
		'away, both are about to discover the shattering price of power as a titanic battle of betrayal and deception reaches out from the ' +
		'past-a blood feud between two generations that threatens to destroy everything Florentyna and Richard have fought to achieve.',
		stars: 3,
		img:'prodigal.jpg'
	},

	{
		title: "A Piece of Cake",
		author: 'Swati Kaushal',
		summary: 'Minal Sharma, MBA. Five foot ten twenty-nine-year-old with a hyperactive conscience '+
		' and a ton of attitude. Minal wants it all-a successful career at International Foods, a ' +
		'lifestyle to match, and a "totally cool\' guy who\'ll buy her diamonds, bring her flowers, and ' +
		'laugh at her jokes. But given the unending record of her life\'s embarrassments, it\'s not going ' +
		'to be that simple. Especially when her mother has decided to take charge of the matrimonial  ' +
		'front, and the choice Minal has to make is between a wild and sexy radio jockey and a brilliant ' +
		'but boring oncologist. And it doesn\'t help that her new colleague on a make-or-break \'Cakes\' '+
		'assignment is a nasty, grudge-bearing kid from her childhood who just might be out to sabotage her ' +
		'career.',
		stars:4,
		img:'piece.jpg'
	},

		{
		title: "Twilight",
		author: 'Stephenie Meyer',
		summary: 'About three things I was absolutely positive.\nFirst, Edward was a vampire.\n Second, ' +
		'there was a part of him—and I didn\'t know how dominant that part might be—that thirsted for my blood.\n' +
		'And third, I was unconditionally and irrevocably in love with him.\n.In the first book of the Twilight Saga, ' +
		'internationally bestselling author Stephenie Meyer introduces Bella Swan and Edward Cullen, a pair of star-crossed' +
		'lovers whose forbidden relationship ripens against the backdrop of small-town suspicion and a mysterious coven ' +
		'of vampires. This is a love story with bite. ',
		stars:4,
		img:'twilight.jpg'
	},
			{
		title: "Harry Potter and the Chamber of Secrets",
		author: 'J.K.Rowling',
		summary: 'All Harry Potter wants is to get away from the Dursleys and go back to Hogwarts School for Witchcraft and Wizardry. ' +
		'But just as he\'s packing his bags, Harry receives a warning from a strange, impish creature named Dobby - who says that if ' +
		'Harry Potter returns to Hogwarts, disaster will strike.\n And strike it does. For in Harry\'s second year at Hogwarts, fresh '+ 
		'torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockheart, a spirit named Moaning Myrtle ' + 
		'who haunts the girls\' bathroom, and the unwanted attentions of Ron Weasley\'s younger sister, Ginny.But each of these seem minor ' +
		' annoyances when the real trouble begins, and someone--or something--starts turning Hogwarts students to stone. Could it be' + 
		' Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could '+
		' it be the one everyone at Hogwarts most suspects... Harry Potter himself.',
		stars:4,
		img:'hp2.jpg'
	},
		{
		title: "Harry Potter and the Prisoner of Azkaban",
		author: 'J.K.Rowling',
		summary: 'Harry Potter is lucky to reach the age of thirteen, since he has already survived the murderous attacks of the feared ' +
		' Dark Lord on more than one occasion. But his hopes for a quiet term concentrating on Quidditch are dashed when a maniacal ' + 
		'mass-murderer escapes from Azkaban, pursued by the soul-sucking Dementors who guard the prison. It\'s assumed that Hogwarts ' + 
		'is the safest place for Harry to be. But is it a coincidence that he can feel eyes watching him in the dark, and should he be' + 
		' taking Professor Trelawney\'s ghoulish predictions seriously?',
		stars:3,
		img:'hp3.jpg'
	}
	]
})
.controller("healthController", function ($scope) {
	$scope.healthArray = [
	
			{
		title: "Healthy diet for healthy living",
		url: 'http://www.helpguide.org/articles/healthy-eating/healthy-eating.htm',
		img:'diet.jpg'
	},
			{
		title: 'Yoga',
		url: 'http://www.everydayhealth.com/fitness-pictures/10-surprising-health-perks-of-yoga.aspx',
		img:'yoga.jpg'
	},
	{
		title: 'How to stay young',
		url: 'http://www.health.com/health/gallery/0,,20356118,00.html',
		img:'stay.jpg'
	},
		{
		title: "Build your won workout routine",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'gym.jpg'
	},
	{
		title: 'Jog your way!!',
		url: 'https://www.betterhealth.vic.gov.au/health/healthyliving/running-and-jogging-health-benefits',
		img:'jog.jpg'
	},

	]
})
.controller("moviesController", function ($scope) {
	$scope.moviesArray = [	
	{ 
		title: 'Avatar',
		url: 'https://www.betterhealth.vic.gov.au/health/healthyliving/running-and-jogging-health-benefits',
		img:'avatar.jpg'
	},
	{
		title: "Forestgump",
		url: 'http://www.helpguide.org/articles/healthy-eating/healthy-eating.htm',
		img:'forestgump.jpg'
	},
			{
		title: 'Frozen',
		url: 'http://www.everydayhealth.com/fitness-pictures/10-surprising-health-perks-of-yoga.aspx',
		img:'frozen.jpg'
	},
	{
		title: 'Gone girl',
		url: 'http://www.health.com/health/gallery/0,,20356118,00.html',
		img:'gonegirl.jpg'
	},				{
		title: "The theory of everything",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'theory.jpg'
	},
		{
		title: "Gravity",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'gravity.jpg'
	},
			{
		title: "Hobbit",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'hobit.jpg'
	},
			{
		title: "Iceage",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'iceage.jpg'
	},
			{
		title: "Illusionist",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'illutionist.jpg'
	},
			{
		title: "Imitation Game",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'imitation.jpg'
	},
				{
		title: "Interstellar",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'interstellar.jpg'
	},
				{
		title: "The Proposal",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'proposal.jpg'
	},
				{
		title: "Rush",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'rush.jpg'
	},
				{
		title: "The Shawshank Redemption",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'shawshank.jpg'
	},

				{
		title: "UP ",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'up.jpg'
	},
	]
})
.controller("travelController", function ($scope) {
	$scope.travelArray = [	
	{
		title: 'Washington',
		url: 'https://www.betterhealth.vic.gov.au/health/healthyliving/running-and-jogging-health-benefits',
		img:'Dc/washdc.jpg'
	},
	{
		title: "Atlanta",
		url: 'http://www.helpguide.org/articles/healthy-eating/healthy-eating.htm',
		img:'Atlanta/atlanta.jpg'
	},
			{
		title: 'Charleston',
		url: 'http://www.everydayhealth.com/fitness-pictures/10-surprising-health-perks-of-yoga.aspx',
		img:'Charleston/charleston.jpg'
	},
			{
		title: "Orlando",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'Orlando/or0.jpg'
	},
	{
		title: 'Las Vegas',
		url: 'http://www.health.com/health/gallery/0,,20356118,00.html',
		img:'Vegas/vegas0.jpg'
	},

	{
		title: "Yosemite",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'Yosemite/yosemite.jpg'
	},
		{
		title: "San Francisco ",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'SF/GGB.jpg'
	}

	]
})
.controller("foodController", function ($scope) {
	$scope.foodArray = [	
	{
		title: "Banana Loaf",
		url: 'http://www.helpguide.org/articles/healthy-eating/healthy-eating.htm',
		img:'banana.jpg'
	},
			{
		title: 'Brownies',
		url: 'http://www.everydayhealth.com/fitness-pictures/10-surprising-health-perks-of-yoga.aspx',
		img:'brownies.jpg'
	},
	{
		title: 'Tea Cake',
		url: 'http://www.health.com/health/gallery/0,,20356118,00.html',
		img:'cake.jpg'
	},
		{
		title: "Caramel Pudding",
		url: 'http://www.nerdfitness.com/blog/2010/02/15/how-to-build-your-own-workout-routine/',
		img:'caramel.jpg'
	},
	{
		title: 'Pasta Alferdo',
		url: 'https://www.betterhealth.vic.gov.au/health/healthyliving/running-and-jogging-health-benefits',
		img:'pasta.jpg'
	},
	{
		title: 'Carrot Halwa',
		url: 'https://www.betterhealth.vic.gov.au/health/healthyliving/running-and-jogging-health-benefits',
		img:'carrot.jpg'
	},
	{
		title: 'Grilled Chicken',
		url: 'https://www.betterhealth.vic.gov.au/health/healthyliving/running-and-jogging-health-benefits',
		img:'grilled.jpg'
	},
	]
});