# LeetCode Problem

🟢 Difficulty: Unknown

🔗 Problem: https://leetcode.com/problems/swap-nodes-in-pairs/submissions/1992346361/

## 💻 Solution (txt)

```txt
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        prev = dummy
        
        while prev.next and prev.next.next:
            a = prev.next
            b = a.next
            
            prev.next = b
            a.next = b.next
```
