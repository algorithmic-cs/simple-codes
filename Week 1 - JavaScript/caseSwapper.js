function swapCase(str) {
    var len = str.length;
    var swapped = "";

    for (var i = 0; i < len; i++) {
        var character = str.charAt(i);
        var code = character.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            swapped += String.fromCharCode(code + 32);
        } else if (code >= 97 && code <= 122) {
            swapped += String.fromCharCode(code - 32);
        } else {
            swapped += character;
        }
    }

    return swapped;
}