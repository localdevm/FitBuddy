//Module requirements
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyparser = require('body-parser');

var app = express();
app.use(express.static('client'));

var db; // Initialiseren van mongoDB variabele naam
var dataTable; //Opslagen van data in formaat

	MongoClient.connect('mongodb://localhost/testmaarten', function (err, _db){
		if (err) throw err;
		if (err) console.log(err);
		console.log("Connected to database");
		db = _db
		dataTable = db.collection('data');

		dataTable.find().each(function(err, doc){
			console.log(doc); //logt een null nadat alle data is weergeven
					  //TODO Fix ^ bug
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
	app.get('/api/data', function(req, res){i
		dataTable.find().toArray(function (err, data){
			console.log(err);
		res.status(200).json(data);
	})
	});

app.post('/api/data', function(req, res){
	console.log(req.body);
	data = {'timestamp': req.body.datum, 'voornaam': req.body.voornaam, 'achternaam': req.body.achternaam, 'bpm': req.body.bpm};
	 console.log("entry created");
	 	dataTable.insert(data, function (err, result){
			if (err) throw err;
			//console.log(err);
				dataTable.find().toArray(function (err, data){
					if (err) throw err;
					//console.log(err);
						res.status(201).json("data received");

				});
		});
});
app.listen(3000);
