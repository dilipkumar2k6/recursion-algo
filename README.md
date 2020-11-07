# Recursive
## Decrease and counter
## Iterative
## Additive series
- Write linear time algorithm in recursion
```
const additiveSeries = (N, a, b) => {
    if(N === 0) {
        return a;
    }
    return additiveSeries(N-1, b, a + b);
}
```
# Tower of Hanoi
```
const towerOfHanoi = (n, src, dist, aux) => {
    if(n === 1) {
        console.log(`move disk from ${src} to ${dist}`);
        return;
    }
    // move n-1 top disks to aux
    towerOfHanoi(n-1, src, aux, dist);

    // move last from src to dist
    towerOfHanoi(1, src, dist, aux);

    // move n-1 disks from aux to dist
    towerOfHanoi(n - 1, aux, dist, src);
}

```
# Math
https://sites.math.northwestern.edu/~mlerma/courses/cs310-05s/notes/dm-gcomb
# Exhaustive Enumerations

1. Letter case permutation: https://leetcode.com/problems/letter-case-permutation/
2. Subsets: https://leetcode.com/problems/subsets/
3. Subsets II: https://leetcode.com/problems/subsets-ii/
4. Permutations: https://leetcode.com/problems/permutations/
5. Permutations II: https://leetcode.com/problems/permutations-ii/
6. Combinations: https://leetcode.com/problems/combinations/
6. https://leetcode.com/problems/combination-sum
6. https://leetcode.com/problems/letter-combinations-of-a-phone-number
7. Back tracking: Generate Parentheses: https://leetcode.com/problems/generate-parentheses/
8. Palindrome Partitioning: https://leetcode.com/problems/palindrome-partitioning/
9. N-Queens: https://leetcode.com/problems/n-queens/ 
and https://leetcode.com/problems/n-queens-ii/
9. https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
10. Fibonacci/selection https://leetcode.com/problems/climbing-stairs/
11. Regex match https://leetcode.com/problems/regular-expression-matching/
12. Edit distance https://leetcode.com/problems/edit-distance/
13. https://leetcode.com/problems/word-search
14. https://leetcode.com/contest/weekly-contest-169/problems/find-n-unique-integers-sum-up-to-zero/
15. https://leetcode.com/problems/restore-ip-addresses
16. https://www.lintcode.com/problem/factorial/description
17. https://leetcode.com/problems/powx-n/
18. https://leetcode.com/problems/target-sum/
19. https://www.educative.io/courses/data-structures-coding-interviews-javascript/m2NMgL057Y9
20. https://leetcode.com/problems/integer-to-english-words/