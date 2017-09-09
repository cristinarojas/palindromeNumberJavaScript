function reverseString(str) {
    // Create an empty string that will host the new created string
    var newString = "";
    str = str.replace(/[.,?:;\/()_-\s]/g, '').toLowerCase();

    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }

    newString = newString.replace(/[.,?:;\/()_-\s]/g, '').toLowerCase();

    return str == newString;
}
 
reverseString('Anita laba la tina');