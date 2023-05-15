/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var array = new Array()
    array = [-1,-1]
    var another_array = new Array()
    
  
    var first = true 

    for(i=0;i<nums.length;i++)
    {
        if(nums[i]== target && first==true)
        {
            array[0]  = i 
            first = false  
        }
         if(nums[i]== target)
        {
            another_array.push(i) 
        }


    }

    console.log(another_array)

    if(another_array.length == 1 && another_array[0] == 0)
    {
        return [0,0]
        

    }
  




    if(another_array[another_array.length-1])
    {   array[1] = another_array[another_array.length-1]    }
    else {       array[1] = -1            }

  

    return array


};