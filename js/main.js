var $elie = $(".cube"), degree = 0, timer;
var stopDegree = 0;
var direction = ''

function rotate() {
        if (stopDegree == degree) {
          degree = 0
          return;
        }
  
        $elie.css({ transform-origin: center center; WebkitTransform: 'rotate' + direction + '(' + degree + 'deg)';});  
        $elie.css({ transform-origin: center center; '-moz-transform': 'rotate' + direction + '(' + degree + 'deg)'});                      
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
    if ( event.key == 'r' ) {
        event.preventDefault();
        direction = 'Y'
        stopDegree = 270
        rotate()
    }  
    if ( event.key == 'b' ) {
        event.preventDefault();
        direction = 'Y'
        stopDegree = 180
        rotate()
    }  
    if ( event.key == 'f' ) {
        event.preventDefault();
        direction = 'Y'
        stopDegree = 360
        rotate()
    }  
    if ( event.key == 't' ) {
        event.preventDefault();
        direction = 'X'
        stopDegree = 90
        rotate()
    }            
    if ( event.key == 'd' ) {
        event.preventDefault();
        direction = 'X'
        stopDegree = 270
        rotate()
    }                 
  });
}
