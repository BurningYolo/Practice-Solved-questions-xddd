/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var count = 0 

      const roman = {
        "I": 1, 
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }

     for (i = 0; i < s.length; i++) {
        if (roman[s[i]+s[i+1]]) {
                count += roman[s[i]+s[i+1]];
                i++;
                continue;
        }
        count += roman[s[i]];
    }
    return count;
    
};