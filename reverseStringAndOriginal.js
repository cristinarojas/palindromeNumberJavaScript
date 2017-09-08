function reverseString(str) {
    var reverseString = "";
    var originalString = "";

    for (var i = str.length - 1; i >= 0; i--) { 
        reverseString += str[i]; 
    }

    reverseString = reverseString.replace(/[.,?:;\/()_-\s]/g, '').toLowerCase();
    console.log('Reverse word: ', reverseString); // aloh

    for (var x = reverseString.length - 1; x >= 0; x--) { 
        originalString += reverseString[x]; 
    }

    console.log('originalString: ', originalString); // hola


    return originalString; // hola
}
 
reverseString('Anita laba la tina');