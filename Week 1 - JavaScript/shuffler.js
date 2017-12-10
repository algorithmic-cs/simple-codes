function shuffler(arr) {
    var len = arr.length;
    var temporary;
    var random;

    // loop starts from the end
    // generates a random number from 0 to current index
    // swaps the element at current index
    // with element at the random index
    for (var i=len-1; i>0; i--) {
        random = Math.floor(Math.random() * i);
        temporary = arr[i];
        arr[i] = arr[random];
        arr[random] = temporary;
    }

    return arr;
}