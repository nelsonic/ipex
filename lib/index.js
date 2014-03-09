var fs = require('fs'), // basic file iO
crypto = require('crypto'), // used for sha1 hashing
i = 0, // increment lines
lineMap = [],
hash, lineCount = 0;

// read the file
fs.readFile('./hello.js', function read(err, data){
	// split lines by newline character
	lines = data.toString().split("\n");

	// hash the bytes of the line 
	lineCount = lines.length;
	// console.dir(lines +' | '+lineCount);
	while(i < lineCount ){
		hash = crypto.createHash('sha1').update(lines[i]).digest('hex');
		// store array of hashes
		lineMap.push(hash);
		i = i + 1;
	}
	console.dir(lineMap);
});


