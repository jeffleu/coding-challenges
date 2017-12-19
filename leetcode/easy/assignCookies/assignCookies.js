/**
 * @param {number[]} children
 * @param {number[]} cookies
 * @return {number}
 */
const findContentChildren = (children, cookies) => {
  children = children.sort((a, b) => a - b);
  cookies = cookies.sort((a, b) => a - b);
  let childPointer = 0;
  let cookiePointer = 0;
  let result = 0;
  
  while(cookiePointer < cookies.length) {
    if (children[childPointer] <= cookies[cookiePointer]) {
      childPointer++;
      result++;
    }
    cookiePointer++;
  }
  
  return result;
};
