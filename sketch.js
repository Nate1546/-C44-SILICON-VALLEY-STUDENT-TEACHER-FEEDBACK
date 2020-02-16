//var press = 0;


var img_lake; 

var noRows=10; var noCols=10;

var item;
var pyramidA=[];
var pyramidx=50;
var pyramidy=410;

var bridgeA=[];
var bridgex=60;
var bridgey=425;

var crossingA=[];
var pyramid, bridge;



function preload() {          
  img_background = loadImage("assets/bg.png");
  img_lake=loadImage("assets/lake.png");
 
}

function setup(){
    var canvas = createCanvas(1000,550);
    
    pyramid=new Pyramid(pyramidx,pyramidy,noRows,noCols);
    bridge=new Pyramid(bridgex,bridgey,noRows,noCols);
    bridge.constBridge();
}
  
function draw() {
  background("cyan");
 // image(img_background,10,10);
 
 
  pyramid.constPyramid();
 
  bridge.bridgeShow();
       
  mousePress();
  
  

  textSize(25);
  stroke("red");
  fill(250,0,5);
    
        text('Cross the Lake to Rescue the Pet Dog ...' ,355,125);
        text('Select one TILE from EACH ROW on Left ...',355,175);
        text('Start from bottom most ROW ...',355,225);
        text('CLICK MOUSE to Shift the Stones ...',355,275); 
        text('Make BRIDGE ... On the Lake ... ',355,325);
        text('Help the PET !',355,375);
      
    
 }

 

function mousePress(){
  if(mouseIsPressed){
    var nowMousex = mouseX;
    var nowMousey = mouseY;
    for(let i=0;i<noRows;i++){
      if(nowMousex>bridgeA[i].x-10 && nowMousex<bridgeA[i].x+10){
        if (nowMousey>bridgeA[i].y-15 &&nowMousey<bridgeA[i].y+15 ){
//          crossingA[i]=bridgeA[i];
 //         crossingA[i].x=620;
        }
      }
    }

  }
}

