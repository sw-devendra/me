var $elie = $(".cube"), degree = 0, timer;
var stopDegree = 0;
var direction = ''
var forever
var degreeY = 0
var degreeX = 0
var delay = 10

function switchDirection() {
        direction = (direction == 'X')? 'Y' : 'X'
}

function rotate() {
        if (direction == 'X') {
            $elie.css({ WebkitTransform: 'rotate' + direction + '(' + degreeX + 'deg)', 
                        'transform-origin': 'center center center', 
                        });  
            $elie.css({ '-moz-transform': 'rotate' + direction + '(' + degreeX + 'deg)',
                        });
            $elie.css({ '-ms-transform': 'rotate' + direction + '(' + degreeX + 'deg)', 
                        'transform-origin': 'center center center', 
                        });  		
            if (forever || degreeX< stopDegree)   {                
                timer = setTimeout(function() {
                    ++degreeX; rotate();
                },delay);
            }
            else {
                if (degreeX >= 360) {
                    degreeX = degreeX%360;
                }
            }
        }
        else {
            $elie.css({ WebkitTransform: 'rotate' + direction + '(' + degreeY + 'deg)', 
                        'transform-origin': 'center center center'});  
            $elie.css({ '-moz-transform': 'rotate' + direction + '(' + degreeY + 'deg)'}); 
            $elie.css({ '-ms-transform': 'rotate' + direction + '(' + degreeY + 'deg)', 
                        'transform-origin': 'center center center'});  		
            if (forever || degreeY< stopDegree)   {                
                timer = setTimeout(function() {
                    ++degreeY; rotate();
                },delay);
            }
            else {
                if (degreeY >= 360) {
                    degreeY = degreeY%360;
                }
            }           
        }
    }

function init() {  
  $elie = $(".cube")
  $(document).keydown(function( event ) {
    forever = false;
    if ( event.key == '4' ) {
       event.preventDefault();
       direction = 'Y'
       stopDegree = 90
       rotate()
    }
    else if ( event.key == '2' ) {
        event.preventDefault();
        direction = 'Y'
        stopDegree = 270
        rotate()
    }  
    else if ( event.key == '3' ) {
        event.preventDefault();
        direction = 'Y'
        stopDegree = 180
        rotate()
    }  
    else if ( event.key == '1' ) {
        event.preventDefault();
        direction = 'Y'
        stopDegree = 360
        rotate()
    }  
    else if ( event.key == '6' ) {
        event.preventDefault();
        direction = 'X'
        stopDegree = 90
        rotate()
    }            
    else if ( event.key == '5' ) {
        event.preventDefault();
        direction = 'X'
        stopDegree = 270
        rotate()
    }
    else if (event.keyCode == 39) { // Right
	stopDegree = degreeY + 90 - (degreeY%90)
	direction = 'Y'
	rotate()
    }
    else if (event.keyCode == 40) { // Right
	stopDegree = degreeX + 90 - (degreeX%90)
	direction = 'X'
	rotate()
    }	  
  });
/*
  var $container 	= $('#am-container'),
					$imgs		= $container.find('img').hide()
					totalImgs	= $imgs.length,
					cnt			= 0;
				
				$imgs.each(function(i) {
					var $img	= $(this);
					$('<img/>').on('load',function() {
						++cnt;
						if( cnt === totalImgs ) {
							$imgs.show();
							$container.montage({
                                liquid 	: false,
                                fixedHeight : 200
							});
							
						}
					}).attr('src',$img.attr('src'));
				});	
*/
  forever = true;
  stopDegree = 360;
  direction = 'Y'
  rotate();
}
