var tripleFive = function() {
	for (var i=0; i<3; i++) {
		console.log("five!")
	}
}

tripleFive();

// var lastLetter = function(input) {
// 	return input[input.length -1];
// };

// lastLetter('hello');
// lastLetter('island');

// var square = function(x) {
// 	return x * x;
// }

// square(3);
// square(5);

var negate = function (j) {
	return -j;
}

negate(5);
negate(-8);

// // var toArray = function('a', 'b', 'c') {
// // 	return ['a', 'b', 'c'];
// // }

// // toArray(1, 4, 5);

// var startsWithA = function(word) {
// 	if (word.charAt(0) === "a") {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// startsWithA('aardvark');
// startsWithA('bear');

// var excite = function(exclamation) {
// 	return exclamation + "!!!";
// }

// excite('yes');
// excite('go');

// var sun = function(string) {

// }

// var tiny = function(n) {
// 	if (n === 0) {
// 		return true;
// 	} else if (n <= 1) {
// 		return true;
// 	} else if (n < 0) {
// 		return false;
// 	}  else if (n > 1) {
// 		return false;
// 	} else {
// 		return false;
// 	}
// }

// tiny(0.3);
// tiny(14);
// tiny(-5);

var getSeconds = function(time) {
	var secondsString = time.split(':');
	// console.log(secondsString);
	var minutes = parseInt(secondsString[0]);
	// console.log(minutes);
	var seconds = parseInt(secondsString[1]);
	return (minutes * 60) + seconds; 
};

getSeconds('01:30');
getSeconds('10:25');

