function quadratic(a, b, c) {
    // array to hold the roots or root
    var roots = [];
    // find the discriminant
    var discriminant = (b * b) - (4 * a * c);
    // variable to hold the square root of discriminant
    var sqrt;
    // roots r1 and r2
    var r1, r2;

    // case 1: discriminant is zero
    // only one root
    if (discriminant === 0) {
        r1 = -b / (2 * a);
        roots.push(r);
    }

    // case 2: discriminant is greater than zero
    // real and distinct roots
    else if (discriminant > 0) {
        sqrt = Math.sqrt(discriminant);
        r1 = (-b + sqrt) / (2 * a);
        r2 = (-b - sqrt) / (2 * a);
        roots.push(r1, r2);
    }


    // case 3: discriminant is less than zero
    // imaginary roots
    else {
        // make disriminant positive
        discriminant *= -1;
        sqrt = Math.sqrt(discriminant);
        // find the imaginary and real parts
        var imaginary = sqrt / (2 * a);
        var real = -b / (2 * a);
        // .toFixed(2) gives to 2 decimal places
        r1 = `${real}+${imaginary.toFixed(2)}i`;
        r2 = `${real}-${imaginary.toFixed(2)}i`;
        roots.push(r1, r2);
    }

    return roots;
}