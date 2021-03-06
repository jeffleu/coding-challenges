# Find K Closest Elements

### Description
Given a sorted array `arr`, two integers `k` and `x`, find the `k` closest elements to `x` in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

### Examples

**Example 1**:
```
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
```

**Example 2**:
```
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
```

**Constraints**:
- 1 <= k <= arr.length
- 1 <= arr.length <= 10^4
- Absolute value of elements in the array and x will not exceed 104
