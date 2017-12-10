function longest(str) {
    // get the words by separating the string
    // by whitespaces
    // /\s+/ is a regular expression
    // \s means for a whitespace
    // + means one or more whitespace
    var words = str.split(/\s+/);
    // put the first word as longest
    var indexLongest = 0;
    // get first word length
    var maxLength = words[0].length;
    // gets current word length
    var currentLength;

    // loop starts at i=1 since
    // longest is already assigned to 0
    for (var i = 1; i < words.length; i++) {
        currentLength = words[i].length;
        if (currentLength >= maxLength) {
            maxLength = currentLength;
            indexLongest = i;
        }
    }

    return words[indexLongest];
}