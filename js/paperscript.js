var red = '#FF0000';
var yellow = '#FFBD0D';
var blue = '#1000FF';
var green = '#8BE800';
var skyblue = '#0CDDE8';
var colors = [];
colors.push(red, yellow, blue, green, skyblue);

var bubbles = [];

var hitOptions = {
	segments: true,
	stroke: true,
	fill: true,
	tolerance: 5
};

//initialize bubbles
for (var i=0; i<numCircles; i++) {
    var path = new Path.Circle({
      center: Point.random() * view.size,
      radius: 30,
      strokeColor: 'white',
      blendMode: 'screen'
    });
  path.style.fillColor = colors[i % 5];
  destinations.push(Point.random() * view.size);
  bubbles.push(path);
}

//bubbles move at every frame (60fps/sec)
function onFrame(event){
  for (var i=0; i<numCircles; i++){
    var item = bubbles[i];
    var vector = destinations[i] - item.position;

    item.position += vector / speed;

    if (vector.length < 5) {
      destinations[i] = Point.random() * view.size;
    }
  }
}

var mousePos;
function onMouseDrag(event){
  mousePos = event.delta;
}

var hitPath;

function onMouseDown(event){
  var hit = project.hitTest(event.point, hitOptions);
  
  if (!hit) {
    var bubble = new Path.Circle({
      center: event.downPoint,
      radius: 30,
      fillColor: colors[numCircles % 5],
      strokeColor: 'white',
      blendMode: 'screen'
    })
    bubbles.push(bubble);
    destinations.push(Point.random() * view.size);
    numCircles += 1;
  }
  
  if (hit){
    hitPath = hit.item;
    var bubbleIndex = bubbles.indexOf(hitPath);
    if (i != -1) {
      bubbles.splice(bubbleIndex, 1);
    }
    hitPath.remove();
    destinations.pop();
    numCircles -= 1;
  }
  $('#numBubbles').text(bubbles.length);
}