/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('./app.css');
require('./header.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// let $ = require('jquery');

document.getElementById('button1').addEventListener('click', function() {
  import('./dummy-component/index.js').then(({ default: component }) => {
    component();
  });
});

document.getElementById('button2').addEventListener('click', function() {
  import('./dummy-component2/index.js').then(({ default: component }) => {
    component();
  });
});

document.getElementById('button3').addEventListener('click', function() {
  import('./dummy-component3/index.js').then(({ default: component }) => {
    component();
  });
});

document.addEventListener('DOMContentLoaded', (function() {
  import('./app.css');

  import('./dummy-component3/index.js').then(({ default: component }) => {
    component();
  });
}));

window.onload = function () {
  import('./dummy-component4/index.js').then(({ default: component }) => {
    component();
  });
};
