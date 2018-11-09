console.log('component 1 loaded, yeah');

require('./index.css');
let $ = require('jquery');

export default function () {
  $('body').addClass('yolooo');
  console.log('component 1 used, yeah');
}