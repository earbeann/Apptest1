let button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10;
var wave1, wave2, wave3, wave4, wave5, wave6, wave7, wave8, wave9, wave10;
var slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10;

let threshold = 5;
let accChangeZ = 0;

let permission = false;
var playing1 = false;
var playing2 = false;
var playing3 = false;
var playing4 = false;
var playing5 = false;
var playing6 = false;
var playing7 = false;
var playing8 = false;
var playing9 = false;
var playing10 = false;

var vol = 0.5;
var count=0;
var Opening=0;

/*----------------------------------------------------------*/

function setup() {

  createCanvas(windowWidth, windowHeight);
  
  r=random(50,255);
  g=random(0,200);
  b=random(50,255);
  

  if(typeof DeviceMotionEvent.requestPermission === "function"){
    background(r,g,b);
    button0 = createButton("Click to IOS Sensor");
    button0.mousePressed(iosAccess);
  }
  else{
    background(r,g,b);
    text("is not a ios", 100, 100);
    text("Sound_Scroll <Up/Down>", windowWidth/2-50, windowHeight/2);
  }

/*----------------------------------------------------------*/

  wave1 = new p5.Oscillator();
  
  slider1 = createSlider(0, 1, vol, 0.1);
  slider1.position(windowWidth/2-50, windowHeight/2);

  wave1.setType('sine');
  wave1.start();
  wave1.freq(261);
  wave1.amp(0);

  button1 = createButton('C <On/Off>');
  button1.position(windowWidth/2-60, windowHeight/2-100);
  button1.mousePressed(toggle1);

/*----------------------------------------------------------*/

  wave2 = new p5.Oscillator();

  wave2.setType('sine');
  wave2.start();
  wave2.freq(329);
  wave2.amp(0);

  button2 = createButton('E <On/Off>');
  button2.position(windowWidth/2-60, windowHeight/2-150);
  button2.mousePressed(toggle2);


/*----------------------------------------------------------*/

  wave3 = new p5.Oscillator();

  wave3.setType('sine');
  wave3.start();
  wave3.freq(391);
  wave3.amp(0);

  button3 = createButton('G <On/Off>');
  button3.position(windowWidth/2-60, windowHeight/2-200);
  button3.mousePressed(toggle3);


/*----------------------------------------------------------*/

  wave4 = new p5.Oscillator();

  wave4.setType('sine');
  wave4.start();
  wave4.freq(293);
  wave4.amp(0);

  button4 = createButton('D <On/Off>');
  button4.position(windowWidth/2+60, windowHeight/2-50);
  button4.mousePressed(toggle4);


/*----------------------------------------------------------*/

  wave5 = new p5.Oscillator();

  wave5.setType('sine');
  wave5.start();
  wave5.freq(349);
  wave5.amp(0);

  button5 = createButton('F <On/Off>');
  button5.position(windowWidth/2+60, windowHeight/2-100);
  button5.mousePressed(toggle5);


/*----------------------------------------------------------*/

  wave6 = new p5.Oscillator();

  wave6.setType('sine');
  wave6.start();
  wave6.freq(440);
  wave6.amp(0);

  button6 = createButton('A <On/Off>');
  button6.position(windowWidth/2+60, windowHeight/2-150);
  button6.mousePressed(toggle6);


/*----------------------------------------------------------*/

  wave7 = new p5.Oscillator();

  wave7.setType('sine');
  wave7.start();
  wave7.freq(493);
  wave7.amp(0);

  button7 = createButton('B <On/Off>');
  button7.position(windowWidth/2+60, windowHeight/2-200);
  button7.mousePressed(toggle7);


/*----------------------------------------------------------*/

  wave8 = new p5.Oscillator();

  wave8.setType('sine');
  wave8.start();
  wave8.freq(277);
  wave8.amp(0);

  button8 = createButton('C# <On/Off>');
  button8.position(windowWidth/2-120, windowHeight/2-100);
  button8.mousePressed(toggle8);


/*----------------------------------------------------------*/

  wave9 = new p5.Oscillator();

  wave9.setType('sine');
  wave9.start();
  wave9.freq(311);
  wave9.amp(0);

  button9 = createButton('D# <On/Off>');
  button9.position(windowWidth/2+120, windowHeight/2-50);
  button9.mousePressed(toggle9);


/*----------------------------------------------------------*/

  wave10 = new p5.Oscillator();

  wave10.setType('sine');
  wave10.start();
  wave10.freq(369);
  wave10.amp(0);

  button10 = createButton('F# <On/Off>');
  button10.position(windowWidth/2+120, windowHeight/2-100);
  button10.mousePressed(toggle10);
}

/*----------------------------------------------------------*/


function iosAccess(){
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
    if (response === "granted"){
      permission = true;
    }
  })
  .catch(console.error);
}

function draw() {
  r=random(50,255);
  g=random(0,200);
  b=random(50,255);
  
  
  checkForShake();
  
  if(Opening===0){
    count++;
  }
  
  if(count>0){
    wave1.amp(slider1.value());
  }
  
  if(count>50){
    wave2.amp(slider1.value());
  }
  
  if(count>100){
    wave3.amp(slider1.value());
  }
  
  if(count>200){
    wave1.amp(0);
    wave2.amp(0);
    wave3.amp(0);
    Opening=1;
    count=0;
  }
  
/*----------------------------------------------------------*/

  if(!permission) return;
  background(255,255,255);
  textsize(72);
  text(rotationX, 100, 100);

  if(playing1){
    background(255,0,255);
  }
  
  else{
    background(51);
  }
}

/*----------------------------------------------------------*/

  
function checkForShake() {
  accChangeZ = abs(accelerationZ - pAccelerationZ);
  // 만약 흔들린다면,
  if (accChangeZ >= threshold) {
      background(r,g,b);
    }
  }



/*----------------------------------------------------------*/

function toggle1() {
  if (!playing1) {
    wave1.start();
    wave1.amp(slider1.value());
    playing1 = true;
  } 

  else {
    wave1.stop();
    playing1 = false;

  }
}

/*----------------------------------------------------------*/

function toggle2() {
  if (!playing2) {
    wave2.start();
    wave2.amp(slider1.value());
    playing2 = true;
  } 

  else {
    wave2.stop();
    playing2 = false;
  }
}

/*----------------------------------------------------------*/

function toggle3() {
  if (!playing3) {
    wave3.start();
    wave3.amp(slider1.value());
    playing3 = true;
  } 

  else {
    wave3.stop();
    playing3 = false;
  }
}

/*----------------------------------------------------------*/

function toggle4() {
  if (!playing4) {
    wave4.start();
    wave4.amp(slider1.value());
    playing4 = true;
  } 

  else {
    wave4.stop();
    playing4 = false;
  }
}

/*----------------------------------------------------------*/


function toggle5() {
  if (!playing5) {
    wave5.start();
    wave5.amp(slider1.value());
    playing5 = true;
  } 

  else {
    wave5.stop();
    playing5 = false;
  }
}

/*----------------------------------------------------------*/

function toggle6() {
  if (!playing6) {
    wave6.start();
    wave6.amp(slider1.value());
    playing6 = true;
  } 

  else {
    wave6.stop();
    playing6 = false;
  }
}

/*----------------------------------------------------------*/

function toggle7() {
  if (!playing7) {
    wave7.start();
    wave7.amp(slider1.value());
    playing7 = true;
  } 

  else {
    wave7.stop();
    playing7 = false;
  }
}

/*----------------------------------------------------------*/

function toggle8() {
  if (!playing8) {
    wave8.start();
    wave8.amp(slider1.value());
    playing8 = true;
  } 

  else {
    wave8.stop();
    playing8 = false;
  }
}

/*----------------------------------------------------------*/


function toggle9() {
  if (!playing9) {
    wave9.start();
    wave9.amp(slider1.value());
    playing9 = true;
  } 

  else {
    wave9.stop();
    playing9 = false;
  }
}

/*----------------------------------------------------------*/

function toggle10() {
  if (!playing10) {
    wave10.start();
    wave10.amp(slider1.value());
    playing10 = true;
  } 

  else {
    wave10.stop();
    playing10 = false;
  }
}