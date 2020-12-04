// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.
// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

let nums = [-1, 0, 1, 2, -1, -4]
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const r = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const s = nums[i] + nums[left] + nums[right];
      if (s < 0) left += 1;
      else if (s > 0) right -= 1;
      else {
        r.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left += 1;
        while (left < right && nums[right] === nums[right - 1]) right -= 1;
        left += 1;
        right -= 1;
      }
    }
  }
  return r;
};
//  index 為該項
//  left right 為當輪， 排除不用蒜
