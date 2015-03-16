var $btnExpand = $('.btn-expand');
var $panel = $('.panel');

console.log($panel);

$btnExpand.on ('click', function () {
    $panel.toggleClass('js-panel-expand');
});