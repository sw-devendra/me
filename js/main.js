var $elie = $(".cube"), degree = 0, timer;
var stopDegree = 0;
var direction = ''
var forever
var degreeY = 0
var degreeX = 0
var delay = 10

function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1
}
function msieversion() {
        var ua = window.navigator.userAgent;
    
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
    
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
    
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
           // Edge (IE 12+) => return version number
           return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
    
        // other browser
        return false;
}

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
            $elie.css({ 'transform': 'rotate' + direction + '(' + degreeX + 'deg)', 
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
            $elie.css({ 'transform': 'rotate' + direction + '(' + degreeY + 'deg)', 
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


function handleSizeChange() {
    var viewportWidth;
    var viewportHeight; 

    if (isFirefox() || msieversion()) {
        viewportWidth = window.innerWidth
        viewportHeight = window.innerHeight
    }
    else {
        viewportWidth = window.visualViewport.width
        viewportHeight = window.visualViewport.height
    }
    $('.scene').css({	'perspective-origin': (viewportWidth/2) + 'px ' + (viewportHeight/2) + 'px'}),
	$elie.css({'top': (viewportHeight/2 - 205) + 'px', 'left': (viewportWidth/2 - 205) + 'px'})
}

function init() {  
  $elie = $(".cube")
  handleSizeChange();
  $(window).resize(handleSizeChange);
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
