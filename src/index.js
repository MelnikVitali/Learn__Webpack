import "./styles.scss";
import "./bootstrap/bootstrap.js";
import some from './some.js';

'use strict';

console.log("hello, world");


$('.title').html('Some, some.....some text !!!');

console.log(some.avg(1, 4, 8));
console.log(some.max(1, 4, 8));

console.log(some.merge({
    a: 1
}, {
    b: 2
}));

jQuery(document).ready(function($) {
     $('body').css('color', 'white');
});
