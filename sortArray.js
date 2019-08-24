/*
From: LeetCode
By: LeetCode
Date: 08/24/19

Given an array of integers nums, sort the array in ascending order.

Example 1:
Input: [5,2,3,1]
Output: [1,2,3,5]

Example 2:
Input: [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]

Note:
1 <= A.length <= 10000
-50000 <= A[i] <= 50000
*/

/*
@param {number[]} nums
@return {number[]}
*/

var sortArray = function(nums) {
  var sorted = nums.slice();
  var temp;

  for (var i = 0; i < sorted.length; i++) {
    for (var j = i + 1; j < sorted.length; j++) {
      if (sorted[j] !== undefined && sorted[j] < sorted[i]) {
        temp = sorted[i]
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  return sorted;
};