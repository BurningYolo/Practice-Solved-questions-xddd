/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    

 
    let i=1, set=new Set(arr);
    while(k>0){
        if(!set.has(i) && --k==0)
        {
            return i
        }
        i++;
    }

};