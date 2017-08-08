var speed = 30;
var destinations = new Array();

$( function() {
  var handle = $( "#speed-handle" );
  $( "#speed-slider" ).slider({
    value: 100-(speed/60*100),
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
      speed = 60-(ui.value/100*60)+1;
    }
  });
} );