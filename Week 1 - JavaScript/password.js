function createPassword() {
    // password array to hold the character codes
    var password = [];
    // the string value of password
    var myPassword = '';

    // symbols in use: # $ & + . @ _
    var symbolsCharCodes = [35, 36, 38, 43, 46, 64, 95];
    var len = symbolsCharCodes.length;

    // append password with character codes of
    // 2 digits, 2 uppercase & 2 lowercase
    var digits = generate(48, 57, password);
    var uppercase = generate(65, 90, password);
    var lowercase = generate(97, 122, password);

    // for symbols, we will generate two positions
    // for the elements in symbolsCharCodes array
    // min = 0, max = len-1
    var symbolsIndex = generate(0, len - 1, []);

    // add the elements from symbolsCharCodes array
    // at positions in the symbolsIndex array
    password.push(symbolsCharCodes[symbolsIndex[0]]);
    password.push(symbolsCharCodes[symbolsIndex[1]]);

    // shuffle the password array to randomise sequence
    password = shuffler(password);

    // form the password from the character codes
    for (var i = 0; i < password.length; i++) {
        myPassword += String.fromCharCode(password[i]);
    }

    return myPassword;
}

function generate(min, max, arr) {
    // number of character codes to generate
    var character = 2;
    // the range of the character codes
    var range = max - min + 1;
    // define the random character code
    var random;

    for (var i = 0; i < character; i++) {
        do {
            // generate within the range
            random = Math.floor(Math.random() * range) + min;
        } while (arr.indexOf(random) !== -1);
        arr.push(random);
    }

    return arr;
}

function shuffler(arr) {
    var len = arr.length;
    var temporary;
    var random;

    // loop starts from the end
    // generates a random number from 0 to current index
    // swaps the element at current index
    // with element at the random index
    for (var i = len - 1; i > 0; i--) {
        random = Math.floor(Math.random() * i);
        temporary = arr[i];
        arr[i] = arr[random];
        arr[random] = temporary;
    }

    return arr;
}