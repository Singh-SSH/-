img = "";

function preload(){
    img = loadImage('186558343_293019369161176_2467248267257637108_n.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV",45, 75);
    noFill();
    stroke("#FF0000")
    rect(30, 60, 520, 350);
}
