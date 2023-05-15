/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    var boolarr = new Array()
 
     var max = (Math.max(...candies)) 
 
     for(var i=0 ; i<candies.length ; i++)
     {
         var check = extraCandies + candies[i] 
 
         if(check>=max)
         {
             boolarr[i] = true 
         }
         else 
         {
             boolarr[i]=false 
         }
         
     }
 
     return boolarr
     
 };