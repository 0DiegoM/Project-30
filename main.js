quick_draw_data_set = [];
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
document.getElementById(sketch_to_be_drawn).innerHTML = "Dibujo a ser trazado "+sketch;

function updateCanvas() {
background("white");
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
document.getElementById(sketch_to_be_drawn).innerHTML = "Dibujo a ser trazado "+sketch;
}

function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}

function setUp() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);

}

function draw() {
    structWeight(10);
    struct(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}