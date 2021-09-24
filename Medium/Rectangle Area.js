/*
Rectangle Area
https://leetcode.com/problems/rectangle-area/
Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).


Submission Detail https://leetcode.com/submissions/detail/558719040/
3080 / 3080 test cases passed.
Status: Accepted
Runtime: 132 ms
Memory Usage: 44.4 MB
Runtime: 132 ms, faster than 66.67% of JavaScript online submissions for Rectangle Area.
Memory Usage: 44.4 MB, less than 84.06% of JavaScript online submissions for Rectangle Area.
*/

/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
 var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    var area = 0
        // bx1 >= ax2 =>B on the right A => they do not intersect 
        // bx2 <= ax1 =>B on the left A=> they do not intersect
        // by2 <=ay1 =>B below A=> they do not intersect
          // by1 >= ay2 =>B above A=> they do not intersect
        if (bx1 >= ax2 || bx2 <= ax1 || by2 <= ay1 || by1 >= ay2)
        //   Rectangle Area = (y2-y1)*(x2-x1)
            area = (ay2- ay1) * (ax2 - ax1) + (by2 - by1) * (bx2 - bx1)  
        else{
            // if they cut each other  => need to calculate the overlap 
            // max 2  low points => overlap1= x=>max(ax1, bx1) ,y=>max(ay1, by1)
            // min 2  high points  =>overlap2= x=>min(ax2, bx2) ,y=>min(ay2, by2)
            //overlapping Area = (overlap1=>x -  overlap1=>x)*(overlap1=>y -  overlap1=>y)
         var   overlapping = (Math.min(ax2, bx2) - Math.max(ax1, bx1))*(Math.min(ay2, by2) - Math.max(ay1, by1)) 
        //  Rectangle Area = (y2-y1)*(x2-x1) - overlapping Area 
         area = (ay2- ay1) * (ax2 - ax1) + (by2 - by1) * (bx2 - bx1) - overlapping
             
        }
        return area
};

// Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
// Expected: 16
console.log(computeArea(-2,-2,2,2,-2,-2,2,2))
// Output 16

// Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
// Expected: 45
console.log(computeArea(ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2))
// Output: 45