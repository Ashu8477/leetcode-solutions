# Substring with Concatenation of All Words

🟢 Difficulty: Hard

🔗 Problem: https://leetcode.com/problems/substring-with-concatenation-of-all-words/submissions/1993938244/

## 💻 Solution (txt)

```txt
class Solution:
    def findSubstring(self, s: str, words: List
[str]) -> List[int]:
        from collections import Counter
        
        if not s or not words:
            return []
        
        word_len = len(words[0])
        total_len = word_len * len(words)
        word_count = Counter(words)
        res = []
        
        for i in range(word_len):
            left = i
            cur_count = Counter()
            count = 0
            
            for j in range(i, len(s) - 
word_len + 1, word_len):
                word = s[j:j + word_len]
                
                if word in word_count:
                    cur_count[word] += 1
                    count += 1
                    
                    while cur_count[word] > 
word_count[word]:
                        left_word = s
```
