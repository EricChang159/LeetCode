// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
let removeElements = function(head, val) {
    let h=new ListNode(-1);
    h.next=head;
    head=h;
    while(!h.next){
        if(h.next.val===val){
            h.next=h.next.next;
        }
        else{
            h=h.next;
        }
    }
    return head.next;  
};
