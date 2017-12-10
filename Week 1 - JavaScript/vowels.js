function vowels(str) {
    // vowels array
    var v = ['a', 'e', 'i', 'o', 'u'];
    // number of vowels
    var count = 0;
    // current character in str
    var current;

    for (var i = 0; i < str.length; i++) {
        // get current character at index i
        current = str.charAt(i);
        // indexOf() returns -1 
        // when value is not in the array
        if (v.indexOf(current) !== -1) {
            count++;
        }
    }

    return count;
}