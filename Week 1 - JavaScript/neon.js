function neon(number) {
    // find the square
    var square = number * number;
    // create a working variable backup
    var backup = square;
    // holds the remainder for backup%10
    var remainder;
    var sum = 0;

    while (backup !== 0) {
        remainder = backup % 10;
        // add remainder to sum
        sum += remainder;
        // decrease number of digits
        backup = Math.floor(backup / 10);
    }

    if (sum === number) {
        return true;
    }

    return false;
}