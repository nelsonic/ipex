var chai = require('chai'),
	Q      = require('q'),
	assert = chai.assert, 
	fs     =  require('fs'),
	ipex   = require('../lib'),  // our module
	log    = console.log;

	// console.log(ipex);

describe('IPEX', function(){
	describe('Turns code into ', function(){
		it('Hello World should return an array with two hashes', function(){
			Q.fcall(function(){var value4 = 'this'; })
			.then(function (value4) {
			    // Do something with value4
			    console.log("Val: ", value4);
					assert.equal(2, 1);
			})
			.catch(function (error) {
			    // Handle any error from all above steps
			    log(">>>> ERROR!")
			})
			.done();



			// fs.readFile('./example/hello.js', function read(err, data){
			// 	if(err) { console.log(" >> ERROR: ",err); }
			// 	// console.log(data);
			// 	ipex.hashes(data, function(lineMap){
			// 		log(lineMap);
			// 		fs.readFile('./example/hello-hashed.json', function read(err, json){
			// 								log('this')
			// 			console.log(json);

			// 		});
			// 	})
			// 	// assert.equal();
			// });   

		});
	});
});
