function generate() {
    // empty numbers array to hold the random numbers
    var numbers = [];

    // set range of the numbers
    var minimum = 1;
    var maximum = 40;

    // set total number of output wanted
    // count CANNOT be greater than maximum
    var count = 6;

    // holds the generated random number
    var random;

    for (var i = 0; i < count; i++) {
        do {
            // Math.random() generates from 0 to 1 exclusive 
            // here random lies from minimum to maximum
            random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        } while (numbers.indexOf(random) !== -1);
        // check for index to determine if number is already present
        // this makes all the numbers unique

        // add the element to the array
        numbers.push(random);
    }

    return numbers.sort((a,b) => a-b);
}