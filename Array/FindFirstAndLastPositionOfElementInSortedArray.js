// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109
let nums = [5,7,7,8,8,10], target = 8

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length < 1) return [-1, -1]

  let l = findMiddle(nums, target)
  let r = findMiddle(nums, target + 1) -1
  if (l <= r) {
    return [l,r]
  } else {
    return [-1, -1]
  }
};
function findMiddle(nums, target) {
  let left = 0
  let right = nums.length -1
  while (left <= right) {

    let middle = Math.floor((left + right) / 2)
    if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
    console.log(left,'left')
    console.log(right,'right')
  }
  return left
}
console.log(searchRange(nums, target))