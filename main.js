function preload(){ 
    classifier = ml5.imageClassifier("DoodleNet")
}
function setup(){
    canvas = createCanvas(300,300); 
    canvas.mouseReleased(classifycanvas)
}
function draw(){
   strokeWeight(7)
   stroke("black")
}