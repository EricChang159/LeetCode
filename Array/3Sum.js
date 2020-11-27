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

let question = [-1,0,1,2,-1,-4]
// let question = [-4,-1,-1,0,1,2]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  nums.sort((a,b)=> {
    return a - b
  })
  let finallyAnswer = []
  let MapNum = new Map()
  for (let i = 0; i < nums.length; i++) {
    MapNum.set(nums[i], i)
  }
  let i = 0
  let j = nums.length - 1
  let towSumArray = []
  while (i < j) {
    let twoSum = nums[i] + nums[j]
    if (MapNum.has(-twoSum) && MapNum.get(-twoSum) !== i && MapNum.get(-twoSum) !== j) {
      if (!towSumArray.includes(twoSum)) {
        finallyAnswer.push([nums[i], nums[j], -twoSum])
        towSumArray.push(twoSum)
      }
      j--
    }
    else if (nums[i] < twoSum) {
      i++
    } else if (nums[i] > twoSum) {
      j--
    }
  }
  return finallyAnswer
};

let answer = threeSum(question)
console.log(answer)