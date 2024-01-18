console.log('Hi, I am klpod221');
console.log('This is my cv, you can find it source code on: ');
console.log('https://github.com/klpod221/cv');

// get #exp element, and calculate year of experience from 2021-12-01
const exp = document.getElementById('exp');
const diff = new Date() - new Date('2021-12-01');
const year = Math.floor(diff / 31536000000);
exp.innerHTML = year;

// if user use mobile, and the route is not /mobile, redirect to /mobile
// and if user use desktop, and the route is /mobile, redirect to /
// if (window.screen.width < 768 && window.location.pathname != '/mobile') {
//   window.location = '/mobile';
// }
// if (window.screen.width >= 768 && window.location.pathname == '/mobile') {
//   window.location = '/';
// }
