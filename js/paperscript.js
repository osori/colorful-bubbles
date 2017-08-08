var red = '#FF0000';
var yellow = '#FFBD0D';
var blue = '#1000FF';
var green = '#8BE800';
var skyblue = '#0CDDE8';
var colors =[];
colors.push(red,yellow,blue,green,skyblue);

var numCircles = 55;


var path = new Path.Circle({
  center: [0, 0],
  radius: 30,
  fillColor: 'red',
  strokeColor: 'white',
  strokeWidth: 0.1,
  blendMode: 'screen'
});

var definition = new SymbolDefinition(path);

for (var i=0; i<numCircles; i++) {
  var path = new Path.Circle({
    center: [0, 0],
    radius: 30,
    fillColor: 'red',
    strokeColor: 'white',
    blendMode: 'screen'
  });
  path.style.fillColor = colors[i % 5];
  destinations.push(Point.random() * view.size)
}


function onFrame(event){
  for (var i=0; i<numCircles; i++){
    var item = project.activeLayer.children[i];
    var vector = destinations[i] - item.position;

    item.position += vector / speed;

    if (vector.length < 5) {
      destinations[i] = Point.random() * view.size;
    }

  }
}