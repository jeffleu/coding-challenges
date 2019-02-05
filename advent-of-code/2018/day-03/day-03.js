const { data } = require('./inputData');

const getFabricClaims = claims => {
  claims = claims.split('\n');

  const coords = {};
  for (let i = 0; i < claims.length; i++) {
    const claim = claims[i].split(' ');
    let [id, padding, dimensions] = [claim[0], claim[2], claim[3]];
    padding = padding.slice(0, padding.length - 1).split(',').map(Number);
    dimensions = dimensions.split('x').map(Number);
    const [left, top, width, height] = [padding[0], padding[1], dimensions[0], dimensions[1]];
    const x = { start: left + 1, end: left + width };
    const y = { start: top + 1, end: top + height };

    for (let i = x.start; i <= x.end; i++) {
      for (let j = y.start; j <= y.end; j++) {
        if (!coords.hasOwnProperty(`${i} ${j}`)) {
          coords[`${i} ${j}`] = new Set([id]);
        } else {
          coords[`${i} ${j}`].add(id);
        }
      }
    }
  }

  let result = 0;
  for (let key in coords) {
    if (coords[key].size > 1) result++;
  }
  return result;
};

const getNonOverlapClaim = coords => {

};

console.log(getFabricClaims(data));
