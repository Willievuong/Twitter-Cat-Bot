console.log('Bot is starting');


var twitter = require('twitter'); 

var config = require('./config.js');
console.log(config);
var client = new twitter(config);

/*
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, 
	function(error, tweets, response){
		if(!error){
			console.log(tweets);
		}

})
*/

var params = {screen_name: 'CatxBot'};
client.post('statuses/update', {status:'Lillian is super cool!!!'},
 function(error, tweet, response){
 	if(!error){
 		console.log(tweet);
 	}else{
 		console.log(error);
 	}
});
