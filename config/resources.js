export const avatarImage = require('../assets/images/avatar.png');

const loremIpsum =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos consequuntur magni quam ullam distinctio asperiores veniam perspiciatis? Quod, esse. Quas similique consequuntur vero provident, placeat doloribus beatae nobis porro.';

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

//export const cards = cardsData;
// [
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     description: loremIpsum,
//     color: '#53D2BD'
//   },
//   {
//     firstName: 'Alice',
//     lastName: 'Smith',
//     description: loremIpsum,
//     color: '#FF6400'
//   },
//   {
//     firstName: 'Jan',
//     lastName: 'Kowalski',
//     description: loremIpsum,
//     color: '#09D010'
//   },
//   {
//     firstName: 'Joanna',
//     lastName: 'Nowak',
//     description: loremIpsum,
//     color: '#C41DC6'
//   }
// ];
