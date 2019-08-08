/*
From: Codewars
By: Shivo
Date: 08/07/19

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/

function findEvenIndex(arr) {
  var ans = {
    found: false,
    index: -1
  }

  // loop over the array
  for (var i = 0; i < arr.length; i++) {
    var left = 0;
    var right = 0;

    // if index is 0, sum of left is 0
    if (i === 0) {
      left = 0;
      // if index is last one, sum of right is 0
    } else if (i === arr.length - 1) {
      right = 0;
    }

    // sum the left of current
    for (var j = 0; j < i; j++) {
      left += arr[j];
    }
    // sum the right of current
    for (var k = i + 1; k < arr.length; k++) {
      right += arr[k];
    }

    // if left and right are equal
    if (left === right) {
      // if ans.found is true
      if (ans.found === true) {
        // if current index is less than ans.index
        if (i < Number(ans.index)) {
          // ans.index = current index
          ans.index = i;
        }
      }
      ans.found = true
      ans.index = i;
    }
  }

  // if ans.found is true
  if (ans.found === true) {
    // return ans.index
    return ans.index;
  } else {
    return -1;
  }
}