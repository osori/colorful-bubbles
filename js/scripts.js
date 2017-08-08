var speed = 40;
var destinations = new Array();

$( function() {
  var handle = $( "#speed-handle" );
  $( "#speed-slider" ).slider({
    value: 100-speed,
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
      speed = 100-ui.value+1;
    }
  });
} );