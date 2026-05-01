# 

🟢 Difficulty: Unknown

🔗 Problem: https://leetcode.com/problems/3sum-closest/submissions/1992341487/

## 💻 Solution (txt)

```txt
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        closest = float('inf')
        
        for i in range(len(nums)-2):
            l, r = i+1, len(nums)-1
            
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                
```
