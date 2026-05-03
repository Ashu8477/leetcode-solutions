# Text Justification

🟢 Difficulty: Hard

🔗 Problem: https://leetcode.com/problems/text-justification/submissions/1994055048/

## 💻 Solution (txt)

```txt
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        res = []
        i = 0
        n = len(words)
        while i < n:
            line_len = len(words[i])
            j = i + 1
            while j < n and line_len + 1 + len(words[j]) <= maxWidth:
                line_len += 1 + len(words[j])
                j += 1
            gaps = j - i - 1
            line = ""
            if j == n or gaps == 0:
                line = " ".join(words[i:j])
                line += " " * (maxWidth - len(line))
            else:
                total_chars = sum(len(w) for w in words[i:j])
                spaces = maxWidth - total_chars
                space_each = spaces // gaps
                extra = spaces % gaps
                for k in range(i, j - 1):
                    line += words[k]
                    line += " " * (space_each + (1 if k - i < extra else 0))
                line += words[j - 1]
            res.append(line)
            i = j
        return res
```
