const getWrappingPaper = (presents) => {
  presents = presents.split(' ');
  const dimensions = presents.reduce((result, present) => {
    return result.concat([present.split('x')]);
  }, []);
  
  let totalWrappingPaper = 0;
  let totalRibbonLength = 0;
  
  dimensions.forEach(dimension => {
    const l = +dimension[0];
    const w = +dimension[1];
    const h = +dimension[2];
    const sizes = [l,w,h].sort((a,b) => a-b);
    const sides = [l*w, l*h, w*h].sort((a,b) => a-b);
    
    totalRibbonLength += sizes[0]*2 + sizes[1]*2 + l*w*h;
    totalWrappingPaper += sides[0]*3 + sides[1]*2 + sides[2]*2;
  });
  
  return {totalWrappingPaper, totalRibbonLength};
};

getWrappingPaper(allPresentsDimensions); // { totalWrappingPaper: 1586300, ribbon: 3737498 }
