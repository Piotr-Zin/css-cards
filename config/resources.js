export const avatarImage = require('../assets/images/avatar.png');

export function readJSON(path) {
  return new Promise((resolve, reject) => {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', path, true);
    xobj.onload = () => resolve(xobj.responseText);
    xobj.onerror = () => reject(xobj.statusText);
    xobj.send();
  });
}
