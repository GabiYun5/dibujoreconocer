function setup(){
    canvas = createCanvas(280, 280)
    canvas.center()
    background("white")
    doodleNet = ml5.imageClassifier("DoodleNet")
    canvas.mouseReleased(RE)
}
function draw(){
    if(mouseIsPressed === true){
        if (mouseButton === LEFT){
            stroke("black")
            strokeWeight(13)
            line(pmouseX,pmouseY,mouseX,mouseY)
        }
        if (mouseButton === RIGHT){
            stroke("white")
            strokeWeight(8)
            line(pmouseX,pmouseY,mouseX,mouseY)
        }
         print(mouseButton);
    }
    
}

function RE(){
    doodleNet.classify(canvas, re)
    
}

function re(error, resultados){
    if(!error){
        doodle = resultados[0].label
        document.getElementById("Re").innerHTML = doodle
    }
}

function guardarimg(){
    if (document.getElementById("nombre").value == "") {
        save("doodle.png")
    }else{
        nombre = document.getElementById("nombre").value
        save(nombre + ".png")
    }
}