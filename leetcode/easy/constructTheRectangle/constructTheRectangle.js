const constructRectangle = area => {
  const sizes = [];
  
  for (let i = 1; i <= area; i++) {
  	if (i === 1) {
  		sizes.push([i, area]);
  	} else if (i === area) {
  		sizes.push([area, 1]);
  	} else if (area % i === 0) {
  		sizes.push([i, area / i]);
  	}
  }

  let result;

  sizes.forEach(size => {
    const l = size[0];
    const w = size[1];
		
    if (l >= w) {
      if (!result) {
        result = size;
      } else {
        const difference = result[0] > result[1] ? result[0] - result[1] : result[1] - result[0];
        const currentDifference = size[0] > size[1] ? size[0] - size[1] : size[1] - size[0];
        if (currentDifference < difference) result = size;
      }
    }
  });

  return result;
};
