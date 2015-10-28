var myRevealingModeul = (function() {
	var privateCounter = 0;

	function privateFunction() {
		privateCounter++;
	}

	function publicFunction() {
		publicIncrement();
	}

	function publicIncrement() {
		privateFunction();
	}

	function publicGetCount(argument) {
		return privateCounter;
	}
	return {
		start:publicFunction,
		increment:publicIncrement,
		count:publicGetCount
	}
})();
console.log(myRevealingModeul.start());
console.log(myRevealingModeul.increment());
console.log(myRevealingModeul.count());