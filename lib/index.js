var crypto = require('crypto'), // used for sha1 hashing
i          = 0,                 // increment lines
lineCount  = 0;
lineMap    = [],
ipex	   = {};

ipex.hashes = function(str, callback){
	// split lines by newline character
	lines = str.toString().split("\n");
	// hash the bytes of the line 
	lineCount = lines.length;
	// console.dir(lines +' | '+lineCount);
	while(i < lineCount ){
	// store array of hashes
		lineMap.push( crypto.createHash('sha1').update(lines[i]).digest('hex') );
		i = i + 1;
	}
	callback(lineMap);
}

module.exports = ipex;