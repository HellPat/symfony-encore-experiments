console.log('component 3 loaded, yeah');
let $ = require('jquery');

export default function () {
  $('body').addClass('fooo');
  console.log('component 3 used, yeah');
}