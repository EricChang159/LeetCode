// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }
let l1 = [1,2,4], l2 = [1,3,4]
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
//   let headNode = new ListNode(0)
// };

var mergeTwoLists = function (l1, l2) {
  // 創立一個全新的 ListNode ，來當作主鏈表。
  let headNode = new ListNode(0);
  let currentNode = headNode;
  // 讀取 l1 目前的值與 l2目前的值比較。
  // 如果 l1.val 小於 l2.val，將當前的 l1 節點加入主鏈表，然後把 l1 指向下一個 l1 節點。
  // 如果 l1.val 大於 l2.val，則把 l2 當前的節點加入主鏈表，然後把 l2 指向下一個 l2 節點。
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next; // 要繼續往下一個節點走
  }
  // 直到 l1 或 l2 一方為 null 則停止比較，並且將另外一邊剩下的節點加入result。
  if (l1 === null) {
    currentNode.next = l2;
  } else if (l2 === null) {
    currentNode.next = l1;
  }
  return headNode.next;
};

mergeTwoLists(l1, l2)