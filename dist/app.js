"use strict";
var heading = document.querySelector('h1');
if (heading) {
    heading.textContent = 'Hello, TypeScript and HTML!';
}
var descrption = document.querySelector('p');
if (descrption) {
    descrption.textContent = 'This is script language';
}
function greeting(e) {
    e.preventDefault();
    var data = document.getElementById('username');
    console.log(data === null || data === void 0 ? void 0 : data.innerHTML);
}
