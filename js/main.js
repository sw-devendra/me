function init() {
  $( ".cube" ).keypress(function( event ) {
    if ( event.which == 'l' ) {
       event.preventDefault();
       $(".cube").addClass('leftview')
    }
  });
}
