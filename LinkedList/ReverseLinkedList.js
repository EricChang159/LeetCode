// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    let last = null
    let firstNode = head
    while (firstNode) {
        const tmp = firstNode.next
        firstNode.next = last
        last = firstNode
        firstNode = tmp
    }
    return last
};