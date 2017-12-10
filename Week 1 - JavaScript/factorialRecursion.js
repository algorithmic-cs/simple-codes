function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    var fact = number * factorial(number - 1);

    return fact;
}