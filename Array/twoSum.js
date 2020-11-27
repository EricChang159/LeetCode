// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1]

const nums = [2,7,11,15]
const target = 9

const twoSum = function (nums, target) {
  const Mymap = new Map()
  for (let i = 0; i < nums.length; i++) {
    Mymap.set(nums[i], i)
  }
  for (let i = 0; i < nums.length; i++) {
    let goal = target - nums[i]
    if (Mymap.has(goal)) {
      let index = Mymap.get(goal)
      if (index !== i) {
        return [i, index]
      }
    }
  }
  return 'no match answer'
}

console.log(twoSum(nums, target))


// discribe: 暴力兩次 for loop (O2)
// 較佳的解法為 將所有數字放進 object 而 map 物件可接受 key 值不為 string 本身還有 內建的 has get delete set 效能較佳的方法可使用
// 其型態為 {num: index, num2: index+1} 可直接用數字取 index 其複查度為 (O)
 