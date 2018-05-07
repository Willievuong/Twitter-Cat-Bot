console.log('Bot is listening...');

var twitter = require('twitter'); 
var config = require('./config.js');
var client = new twitter(config);

//Posting 
/*
function tweet(tweetTxt){
	var tweet = {
		status: tweetTxt
	}

client.post('statuses/update', tweet ,
 function(error, tweet, response){
 	if(!error){
 		console.log(tweet);
 	}else{
 		console.log(error);
 	}
});
*/

//Following Event
var stream = client.stream('user');

// Load your image
var data = require('fs').readFileSync('image.jpg');

stream.on('follow', followed);

function followed(event){
	console.log("Someone followed me!");
	 var name = event.source.name;
     var screenName = event.source.screen_name;
  // function that replies back to the user who followed
  tweet('@' + screenName + ' Thanks.');

}

function tweet(tweetTxt){
	client.post('media/upoad', {media: data}, function(error, media, response){
	if(error){
		console.log(error);
	}else{
		var tweet = {
		status: tweetTxt,
		media_ids: media.media_id_string
	}
	console.log(media);
	client.post('statuses/update', status, function(error, tweet, response){
		if(error){
			console.log(error);
		}else{
			console.log(tweet);
			}
		})
	}
})

}

/*
client.post('media/upload', {media: data}, function(error, media, response) {

  if (!error) {

    // If successful, a media object will be returned.
    console.log(media);

    // Lets tweet it
    var status = {
      status: 'I am a tweet',
      media_ids: media.media_id_string // Pass the media id string
    }

    client.post('statuses/update', status, function(error, tweet, response) {
      if (!error) {
        console.log(tweet);
      }
    });

  }
});
*/

//Streaming
/*
client.stream('statuses/filter', {track: 'java'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event && event.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});
*/


