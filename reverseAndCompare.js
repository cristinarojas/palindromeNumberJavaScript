function reverseAndPalindrome(str) {
	str = str.replace(/[.,?:;\/()_-]/g, '').toLowerCase();

	// reverse string 
	str = str.split('').reverse().join();

	return str == str;
}

reverseAndPalindrome('Anita laba la tina');
