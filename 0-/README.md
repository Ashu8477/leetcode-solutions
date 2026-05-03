# 

🟢 Difficulty: Hard

🔗 Problem: https://leetcode.com/problems/reverse-nodes-in-k-group/submissions/1993927345/

## 💻 Solution (txt)

```txt
class Solution:
    def reverseKGroup(self, head: Optional
[ListNode], k: int) -> Optional[ListNode]:
        def getKth(cur, k):
            while cur and k > 0:
                cur = cur.next
                k -= 1
            return cur
        dummy = ListNode(0, head)
        groupPrev = dummy
        while True:
            kth = getKth(groupPrev, k)
            if not kth:
                break
            groupNext = kth.next
            prev, cur = kth.next, groupPrev.
next
            while cur != groupNext:
                tmp = cur.next
                cur.next = prev
                prev = cur
                cur = tmp
            tmp = groupPrev.next
            groupPrev.next = kth
            groupPrev = tmp
```
