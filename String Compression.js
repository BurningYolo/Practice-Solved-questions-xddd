/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = chars => {
    var count = 1
    var bruh = 0
    for (var i = 0; i < chars.length; i++) { 
        if (chars[i] === chars[i + 1]) { 
            count++
        }
        else if (count === 1) { 
            chars[bruh++] = chars[i]
        }
        else if (count < 10) { 
            chars[bruh++] = chars[i]
            chars[bruh++] = count.toString()
            count = 1
        }
         else { 
            const s = count.toString().split('')
            chars[bruh++] = chars[i]
            for (let j = 0; j < s.length; j++) { 
                chars[bruh++] = s[j]
            }
            count = 1
        }
    }
    return bruh 
};