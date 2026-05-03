# LeetCode Problem

🟢 Difficulty: Hard

🔗 Problem: https://leetcode.com/problems/merge-k-sorted-lists/submissions/1993886186/

## 💻 Solution (txt)

```txt
import heapq
class Solution:
    def mergeKLists(self, lists: List[Optional
[ListNode]]) -> Optional[ListNode]:
        heap = []
        
        for i, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.
val, i, node))
        
        dummy = ListNode(0)
        cur = dummy
        
        while heap:
            val, i, node = heapq.heappop(heap)
            cur.next = node
            cur = cur.next
            
            if node.next:
                heapq.heappush(heap, (node.
next.val, i, node.next))
        
        return dummy.next
```
