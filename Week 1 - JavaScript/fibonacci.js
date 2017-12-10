function fibonacci(terms) {
    // sequence starts with 1, 1...
    var first = 1;
    var second = 1;
    // define the third term
    var third;
    // array to hold the sequence
    var fibo = [first, second];

    while (fibo.length !== terms) {
        // find the next term
        third = first + second;
        // add the term to the sequence
        fibo.push(third);

        // the second term becomes the first
        first = second;
        // third term becomes the second
        second = third;
    }

    return fibo;
}