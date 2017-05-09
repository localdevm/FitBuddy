//Module requirements
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyparser = require('body-parser');

var app = express();
app.use(express.static('client'));

var db; // Initialiseren van mongoDB variabele naam
var dataTable; //Opslagen van data in formaat
			   //"timestamp": ISODate(), "naam": "", "pulse": pulse
			   //"timestamp" : ISODate(), "Naam": "Maarten"; "pulse": 67

						//TODO Database link here
	MongoClient.connect('mongodb://localhost/testmaarten', function (err, _db){
		if (err) throw err;
		if (err) console.log(err);
		console.log("Connected to database");
		db = _db //Als error is , weergeef error
		dataTable = db.collection('data').find();

		dataTable.each(function(err, doc){
			console.log(doc);
		});

	});

	//MOGELIJKE BEMERKINGEN
	//Data weergeven. Naam in textbox? > toon vakje met naam , bpm en laatste tijd
						//Hoe constant automatisch refreshen?

	app.use(bodyparser.json());

	//Break database connection
	process.on('SIGINT', function(){
		console.log("Server wordt afgesloten");
		db.close();
		process.exit(0);
	});

	app.use(function(req, res, next) {
	  	res.header("Access-Control-Allow-Origin", "*");
	  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  	next();
	});

	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
	app.get('/api/data', function(req, res){
		dataTable.toArray(function (err, data){
			console.log(err);
		res.status(200).json(data);
	})
	});

	//Hallokes


	app.listen(3000);
