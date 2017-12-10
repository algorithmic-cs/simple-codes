function bitsCounter(number) {
    // number of bits that are 1's
    var count = 0;

    while (number !== 0) {
        // if remainder is 1, bit is ON
        if (number % 2 === 1) {
            count++;
        }
        // go the next bit
        number = Math.floor(number / 2);
    }

    return count;
}