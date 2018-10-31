var $elie = $(".cube"), degree = 0, timer;
var stopDegree = 0;
var direction = ''

function rotate() {
        if (stopDegree == degree) {
          degree = 0
          return;
        }
  
        $elie.css({ WebkitTransform: 'rotate' + direction + '(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotate' + direction + '(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },5);
    }

function init() {  
  $elie = $(".cube")
  $elie.keypress(function( event ) {
    if ( event.key == 'l' ) {
       event.preventDefault();
       direction = 'Y'
       stopDegree = 90
       rotate()
    }
  });
}
