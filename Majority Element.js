/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    
    nums.sort((a, b) => a - b);
    var max = 0 
    var ans 

    

    for(var i=0 ; i<nums.length ; i++)
    {
        var count=0
     
        for(var j=0 ; j<nums.length ; j++)
        {
            if(nums[i]==nums[j])
            {
                count++ 
            }
            if (count > max) {
                max = count;
                  ans = i;
      }
        }
    }

    return nums[ans] 
    
};