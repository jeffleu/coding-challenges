# Battleships in a Board

### Description
Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
* You receive a valid board, made of only battleships or empty slots.
* Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
* At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.

### Example:
```
X..X
...X
...X
```
In the above board there are 2 battleships.

### Invalid Example:
```
...X
XXXX
...X
```

This is an invalid board that you will not receive - as battleships will always have a cell separating between them.

**Note**:
1. `n` is a positive integer, which is in the range of [1, 10000].
2. All the integers in the array will be in the range of [-10000, 10000].













