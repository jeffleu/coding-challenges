#Pascal's Triangle

###Description:
Here you will create the classic pascal's triangle. Your function will be passed the depth of the triangle and your code has to return the corresponding pascal triangle up to that depth.

###Example:
`pascal(5); // [ 1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1 ]`

To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all "1").

```
          [1]
        [1   1]
       [1  2  1]
      [1  3  3  1]
```

Here you get the 3 by adding the 2 and 1 above it.
