/* global requirejs */

var tests = Object.keys(window.__karma__.files)
  .filter(function (file) {
    return /\.spec\.js$/i.test(file);
  });

requirejs.config({
  baseUrl: '/base',
  paths: {},
  shim: {},
  deps: tests,
  callback: window.__karma__.start
});
