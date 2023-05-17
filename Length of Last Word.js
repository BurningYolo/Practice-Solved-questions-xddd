/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var sum = 0 ; 
    var check = false  ; 

    for(var i = s.length-1; i>=0  ; i-- )
    {
        if(s[i] != " " )
        {
            sum++ ; 
            check = true ; 
        }

        if(check == true && s[i] == " ")
        {
            break ; 
        }


        
    }
    return sum ; 
    
};