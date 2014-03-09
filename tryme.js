var fs = require('fs'),     // basic file iO
  ipex = require('./lib');  // our module

fs.readFile('./example/hello.js', function read(err, data){
	if(err) { console.log("Error ", err); }
	ipex.hashes(data, function(lineMap){
		console.log(lineMap);
		
		fs.writeFile('./example/hello-hashed.json', JSON.stringify(lineMap), function(err){
			if(err) {
				console.log("ERROR: ", err);
			} else {
				console.log('file saved!');
			}
		});
	});
});