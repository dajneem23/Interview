/*
Problem :https://leetcode.com/problems/max-consecutive-ones/
Given a binary array nums, return the maximum number of consecutive 1's in the array.


Submission Detail :https://leetcode.com/submissions/detail/560121564/?from=explore&item_id=3982
42 / 42 test cases passed.
Status: Accepted
Runtime: 284 ms
Memory Usage: 45.7 MB

*/ 

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    if(!nums.includes(1)) return 0;
    var n =nums.length;
    //  array to string 
    nums=nums.join('');
    var max =nums.match(/1{1,}/)[0].length 
    //slice nums from 1to n-1
    for(let i=1;i<=n-1;i++){
        var number =nums.slice(i).match(/1{1,}/) 
        //if number is defined
        if(number){
            // if  number[0].length greater than max  => max = number[0].length 
             max = number[0].length>max ?number[0].length :max
        }
    }
   return  max 
    
};
// Input:  [1,1,0,1,1,1]
// Expected: 3
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
// Output 3