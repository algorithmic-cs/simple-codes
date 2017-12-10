function factorial(number) {
    if (number===0 || number===1) {
        return 1;
    }

    var fact=2;

    for (var i=number; i>2; i--) {
        fact *= i;
    }

    return fact;
}