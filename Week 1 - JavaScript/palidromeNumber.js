function palindrome(number) {
    var remainder;
    var temporary = number;
    var reverse = 0;

    while (temporary !== 0) {
        remainder = temporary % 10;
        reverse = reverse * 10 + remainder;
        temporary = Math.floor(temporary / 10);
    }

    if (reverse === number) {
        return true;
    }

    return false;
}