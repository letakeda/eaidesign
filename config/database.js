module.exports = function(uri){

	var mongoose = require('mongoose');
	var connection = mongoose.connect('mongodb://' + uri);

	mongoose.connection.on('connected', function(){
		console.log("Mongoose connected!");
	});

	mongoose.connection.on('error', function(error){
		console.log("Error occured:"+error);
	});

	mongoose.connection.on('disconnected', function(){
		console.log("Mongoose disconnected!")
	});

	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log("Application has been closed (SIGINT)");
			process.exit(0);
		});
	});
}