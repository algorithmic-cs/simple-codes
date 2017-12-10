function palindrome(str) {
    var isPalindrome = true;

    for (var i = 0, reverse = str.length - 1; i < str.length / 2; i++, reverse--) {
        if (str.charAt(i) !== str.charAt(reverse)) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}