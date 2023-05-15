/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    var number = 0 
    
    
    for(var i = 0 ; i<nums.length ; i++)
        {
            var count = 0 

            for(var j=0 ; j<nums.length ; j++)
            {
                if(nums[i] == nums[j])
                {
                    count ++
                    var number = nums[i]

                }
          
            }

                  if(count == 1 )
            {
                return number 
            }

            
            
        }
    

    
};