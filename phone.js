var img="";

status="";

objects=[];

function preload(){
img=loadImage("WIN_20220104_09_31_03_Pro.jpg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modalloaded);
document.getElementById("status").innerHTML="status : detecting objects";
}

function draw(){
image(img,0,0,640,420);

if (status !="") {
   for (i=0; i<objects.length; i++){
       document.getElementById("status").innerHTML="status : objects detected";
       fill("#ff0000");
       percent= floor(objects[i].confidence*100);
       text(objects[i].label+" "+percent+"%",objects[i].x+10,objects[i].y+20);
       noFill();
       stroke("#ff0000");
       rect(objects[i].x-50,objects[i].y,objects[i].width,objects[i].height);
       document.getElementById("numberofobjectsd").innerhtml="Number of objects detected : "+objects.length;
   } 
}
}

function modalloaded(){
    console.log("modalloaded");
    status=true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error,results){
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects=results;
}