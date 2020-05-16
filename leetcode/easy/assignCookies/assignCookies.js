/**
 * @param {number[]} children
 * @param {number[]} cookies
 * @return {number}
 */

/*
Runtime: 92 ms, faster than 46.19% of JavaScript online submissions for Assign Cookies.
Memory Usage: 37.8 MB, less than 100.00% of JavaScript online submissions for Assign Cookies.
*/

const findContentChildren = (children, cookies) => {
  children = children.sort((a, b) => b - a);
  cookies = cookies.sort((a, b) => b - a);
  let childPointer = 0;
  let cookiePointer = 0;
  let result = 0;
  while(childPointer < children.length && cookiePointer < cookies.length) {
    if (cookies[cookiePointer] >= children[childPointer]) {
      childPointer++;
      cookiePointer++;
      result++;
    } else {
      childPointer++;      
    }
  }
  return result;
};
