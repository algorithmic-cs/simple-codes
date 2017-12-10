// right shift -> -ve
// left shift -> +ve
// where is the origial letter relative to its new value
// T - 3 = Q => T is on the right of Q
// T + 3 = W => T is on the left of W

function caesar(message, shift) {
    var encrypted = '';
    var current;
    var charCode;
    var displace;
    
    for(var i=0; i<message.length; i++) {
        current = message.charAt(i);
        charCode = current.charCodeAt(0);
        
        // if lowercase, make uppercase
        if(charCode >= 97 && charCode <= 122) {
            charCode -= 32;
        }
        
        // if not letter, let as is
        if(charCode < 65 || charCode > 90) {
            encrypted += current;
        }
        
        // else shift the letter
        else {
            displace = Math.abs((charCode - 65 + shift)) % 26;
            charCode = 65 + displace;
            encrypted += String.fromCharCode(charCode);
        }
    }
    
    return encrypted;
}