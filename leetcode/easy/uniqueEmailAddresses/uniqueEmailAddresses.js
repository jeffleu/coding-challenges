/**
 * @param {string[]} emails
 * @return {number}
 */
 
const numUniqueEmails = emails => {
  const storage = new Set();

  for (let i = 0; i < emails.length; i++) {
    let temp = '';
    let local = true;
    let ignore = false;

    for (let j = 0; j < emails[i].length; j++) {
      const char = emails[i][j];
      if (char === '+') ignore = true;
      if (char === '@') local = false;
      if (!local || local && char !== '.' && !ignore) temp += char;
    }

    if (!storage.has(temp)) storage.add(temp);
  }

  return storage.size;
};
