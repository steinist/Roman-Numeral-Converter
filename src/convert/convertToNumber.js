const convertToNumber = (roman) => {
    if (!roman) {
        return "Empty string";
    }

    const lookup = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};

    let number = lookup[roman.charAt(0)];
    let pre, curr;

    for (let i = 1; i < roman.length; i++) {
        curr = lookup[roman.charAt(i)];
        pre = lookup[roman.charAt(i - 1)];

        if (curr > pre) {
            number += curr - 2 * pre;
        } else {
            number += curr;
        }
    }

    if (!number) {
        number = "Enter the right roman numeral";
    }

    return number
}

export default convertToNumber;