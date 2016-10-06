/*
  Description:
  Write function toInitials returs initials for a given person name.

  Example: 
  toInitials('Bill Gates'); // 'B. G.'
*/

const toInitials = (name) => name.split(' ').map(n => `${n[0]}.`).join(' ');