##Clean up the Words

###Challenge Description:

You have a list of words. Letters of these words are mixed with extra symbols, so it is hard to define the beginning and end of each word. Write a program that will clean up the words from extra numbers and symbols.

##Input Sample:

The first argument is a path to a file. Each line includes a test case with a list of words: letters are both lowercase and uppercase, and are mixed with extra symbols.
```
(--9Hello----World...--)
Can 0$9 ---you~
13What213are;11you-123+138doing7
```

###Output Sample:

Print the cleaned up words separated by spaces in lowercase letters.
```
hello world
can you
what are you doing
```

###Constraints:

* Print the words separated by spaces in lowercase letters.
* The length of a test case together with extra symbols can be in a range from 10 to 100 symbols.
* The number of test cases is 40.
