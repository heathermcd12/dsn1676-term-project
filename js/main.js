var $btnExpand = $('.btn-expand');
var $panel = $('.panel');

var $btnMove = $('.btn-move');
var $portrait = $('.portrait');

console.log($panel);
console.log($portrait);

$btnExpand.on ('click', function () {
    $panel.toggleClass('js-panel-expand');
});