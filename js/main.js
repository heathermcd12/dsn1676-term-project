var $btnExpand = $('.btn-expand');
var $panel = $('.panel');

var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

console.log($panel);
console.log($box);

$btnExpand.on ('click', function () {
    $panel.toggleClass('js-panel-expand');
});

$btnShowHide.on ('click', function () {
    $box.toggleClass('js-box-show');
});

