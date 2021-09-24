// Problem : https://leetcode.com/problems/rotate-array/
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Submission Detail: https://leetcode.com/submissions/detail/559177459/
// 37 / 37 test cases passed.
// Status: Accepted
// Runtime: 104 ms
// @Memory Usage: 50.4 MB
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    var n = nums.length;
    // if k < n then k = k else  k >= n then k = k%n
    k = k% n;
    // copy nums array
    var clone= [...nums]
    // After reversing all numbers : 7 6 5 4 3 2 1 clone.reverse()
    // After reversing first k numbers : 5 6 7| 4 3 2 1 clone.reverse().slice(0,k).reverse()
    // After revering last n-k numbers (Result) :5 6 7 | 1 2 3 4 clone.slice(k,n).reverse()
    // concat them and return result clone.reverse().slice(0,k).reverse().concat(clone.slice(k,n).reverse())

    clone= clone.reverse().slice(0,k).reverse().concat(clone.slice(k,n).reverse())
    // stands for
    // clone =clone.reverse()
    // let Left = clone.slice(0,k).reverse()
    // let Right=clone.slice(k,n).reverse()
    // clone=Left.concat(Right)

    //paste clone in nums 
    for(let i=0;i<n;i++)nums[i]=clone[i]
};
// input [1,2,3,4,5,6,7]  3
// Expected  [5,6,7,1,2,3,4]  
var nums =[1,2,3,4,5,6,7]
rotate(nums,3)
console.log(nums)
// ouput [5, 6, 7, 1, 2, 3, 4]