# Sudoku Solver

🟢 Difficulty: Hard

🔗 Problem: https://leetcode.com/problems/sudoku-solver/submissions/1994024499/

## 💻 Solution (txt)

```txt
class Solution:
    def solveSudoku(self, board: List[List
[str]]) -> None:
        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]
        empty = []
        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    empty.append((r, c))
                else:
                    val = board[r][c]
                    rows[r].add(val)
                    cols[c].add(val)
                    boxes[(r // 3) * 3 + c // 
3].add(val)
        def backtrack(i):
            if i == len(empty):
                return True
            r, c = empty[i]
            b = (r // 3) * 3 + c // 3
            for d in map(str, range(1, 10)):
                if d not in rows[r] and d not 
in cols[c] and d not in boxes[b]:
```
