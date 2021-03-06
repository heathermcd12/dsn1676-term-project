var $btnExpand = $('.btn-expand');
var $panel = $('.panel');

var $btnHover = $('.btn-hover');
var $button = $('.button');

var $btnShowHide1 = $('.btn-show-hide-1');
var $box1 = $('.box-1');

var $btnShowHide2 = $('.btn-show-hide-2');
var $box2 = $('.box-2');

var $btnShowHide3 = $('.btn-show-hide-3');
var $box3 = $('.box-3');

$btnHover.on ('click', function () {
    $panel.toggleClass('js-button-hide');
});

$btnExpand.on ('click', function () {
    $panel.toggleClass('js-panel-expand');
});

$btnShowHide1.on ('click', function () {
    $box1.toggleClass('js-box-show');
});

$btnShowHide2.on ('click', function () {
    $box2.toggleClass('js-box-show');
});

$btnShowHide3.on ('click', function () {
    $box3.toggleClass('js-box-show');
});

$('.nav').localScroll();

$('.button').localScroll();

$('.box').localScroll();

var $motion = $('.motion');
var $btn = $('.btn');
$motion.waypoint (function () {
    $btn.addClass('js-btn-show');
},{offset:"50%"});

