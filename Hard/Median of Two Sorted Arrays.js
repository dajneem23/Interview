// problem :https://leetcode.com/problems/find-in-mountain-array/
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
// Code:
//2094 / 2094 test cases passed.
// Status: Accepted
// Runtime: 112 ms
// Memory Usage: 44.2 MB
// link Submission Detail https://leetcode.com/submissions/detail/557469721/
var findMedianSortedArrays = function(nums1, nums2) {
    // Merge 2 array
    var totalArray=nums1.concat(nums2)
    //sort small to large 
    totalArray.sort((a, b) => a - b)
    if(totalArray.length%2!=0){
        //if odd  returns middle  element 
        return totalArray[Math.floor(totalArray.length/2)]
    }else{
        //if odd  returns average of 2 middle  element 
        return (totalArray[Math.floor(totalArray.length/2)]+totalArray[Math.floor(totalArray.length/2)-1])/2
    }

};
//input [1,2], [3,4]
// Expected  : 2.50000
console.log(findMedianSortedArrays([1,2], [3,4]))
// output 2.5