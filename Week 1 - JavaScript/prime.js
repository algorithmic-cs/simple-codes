function prime(number) {
    var isPrime = true;

    if (number===0 || number===1) {
        return false;
    }

    for (var i=2; i<=number/2; i++) {
        if (number%i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}