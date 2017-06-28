/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = record => {
  let absences = 0;
  let lates = 0;
  
  for (let i = 0; i < record.length; i++) {
    if (record[i] === 'A') {
      absences++;
      if (absences > 1) return false;
    }

    if (record[i] === 'L') {
      lates++;
      if (lates > 2) return false;
    } else {
      lates = 0;
    }
  }

  return true;
};
