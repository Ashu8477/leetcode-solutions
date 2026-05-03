# Wildcard Matching

🟢 Difficulty: Unknown

🔗 Problem: https://leetcode.com/problems/wildcard-matching/submissions/1994039232/

## 💻 Solution (txt)

```txt
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        s_ptr = p_ptr = 0
        star = -1
        match = 0
        
        while s_ptr < len(s):
            if p_ptr < len(p) and (p[p_ptr] == 
s[s_ptr] or p[p_ptr] == '?'):
                s_ptr += 1
                p_ptr += 1
            
            elif p_ptr < len(p) and p[p_ptr] 
== '*':
                star = p_ptr
                match = s_ptr
                p_ptr += 1
            
            elif star != -1:
                p_ptr = star + 1
                match += 1
                s_ptr = match
            
            else:
                return False
        
        while p_ptr < len(p) and p[p_ptr] == 
'*':
            p_ptr += 1
```
