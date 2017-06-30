/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (children, cookies) => {
  children = children.sort((a,b) => a-b);
  cookies = cookies.sort((a,b) => a-b);
  
  let result = 0;
  
  while(cookies.length) {
  	const cookie = cookies.shift();
  	for (let i = 0; i < children.length; i++) {
  		if (cookie >= children[i]) {
  			children.shift();
  			result++;
  			break;
  		}
  	}
  }
  
  return result;
};
