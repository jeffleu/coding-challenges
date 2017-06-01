const isSameTree = (root1, root2) => {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  const queue1 = [root1];
  const queue2 = [root2];
  let same = true;
  
  while(queue1.length || queue2.length) {
    if (!queue1.length || !queue2.length) {
      same = false;
      break;
    }
    if (queue1.length && queue2.length) {
      const current1 = queue1.shift();
      const current2 = queue2.shift();

      if (current1.val !== current2.val ||
         (current1.left && !current2.left) || (!current1.left && current2.left) ||
         (current1.right && !current2.right) || (!current1.right && current2.right)) {
        same = false;
        break;
      }
      
      if (current1.left && current2.left) {
        queue1.push(current1.left);
        queue2.push(current2.left);
      }
      
      if (current1.right && current2.right) {
        queue1.push(current1.right);
        queue2.push(current2.right);
      }
    }
  }
  
  return same;
};
