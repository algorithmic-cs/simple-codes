function armstrong(number) {
    var sum = 0;
    // create a working variable backup
    var backup = number;
    // holds the remainder for backup%10
    var remainder;

    while (backup !== 0) {
        remainder = backup % 10;
        // add the cube of remainder to sum
        sum += Math.pow(remainder, 3);
        // decrease number of digits
        backup = Math.floor(backup / 10);
    }

    if (sum === number) {
        return true;
    }

    return false;
}