var $btnShowHide = $('.btn-show-hide');
var $text = $('.box');

console.log ($box);

$btnShowHide.on('click', function () { //'click' is the action we want the user to do, then the function of rotation will occur
    $text.toggleClass('js-box-show-hide'); //adding a new class, TOGGLE: switch class on and off
    
});