function isPalindromeNumber(number) {
	// No palindrome if is 1 or 0
	if (number === 1 || number === 0) return false;

	// No palindrome if is negative number
	if (number < 0) return false;

	var value = 1;

	while (number/value > 10) {
		value = value * 10;
	}

	while (number > 0) {
		if(Math.floor(number/value) === number % 10) {
			number = Math.floor((number%value)/10);
			value = Math.floor(value/100);
		} else return false;
	}

	return true;
}

isPalindromeNumber(110011); // TRUE
