/*  we need to load html and sass first, because everything else in
    javascript depends on it and would cause errors if you moved
    them lower down the page    */
import "./index.html";
import "./sass/main.scss";

// importing modules
import "./javascript/nav.js";
import "./javascript/sidebar.js";
import "./javascript/courses.js";
import "./javascript/slider.js";
import "./javascript/questions.js";

// code to start the animations after everything is already loaded
// so that everything doesn't transition in when the page loads and
// gets displayed immediately
setTimeout(function () {
  document.body.className = "";
}, 500);
