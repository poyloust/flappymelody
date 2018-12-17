/*
	pitch detector in p5.js
    Ref https://github.com/tigoe/p5js_examples/tree/master/toneDetect
	
*/

var mic;		
var fft;	
var tone=0;

var serial;          
var portName = '/dev/cu.BLUETOOTH-1-DevB';  
var outByte = 0;

var pitches = {
	NOTE_B0: 31,
	NOTE_C1: 33,
	NOTE_CS1: 35,
	NOTE_D1: 37,
	NOTE_DS1: 39,
	NOTE_E1: 41,
	NOTE_F1: 44,
	NOTE_FS1: 46,
	NOTE_G1: 49,
	NOTE_GS1: 52,
	NOTE_A1: 55,
	NOTE_AS1: 58,
	NOTE_B1: 62,
	NOTE_C2: 65,
	NOTE_CS2: 69,
	NOTE_D2: 73,
	NOTE_DS2: 78,
	NOTE_E2: 82,
	NOTE_F2: 87,
	NOTE_FS2: 93,
	NOTE_G2: 98,
	NOTE_GS2: 104,
	NOTE_A2: 110,
	NOTE_AS2: 117,
	NOTE_B2: 123,
	NOTE_C3: 131,
	NOTE_CS3: 139,
	NOTE_D3: 147,
	NOTE_DS3: 156,
	NOTE_E3: 165,
	NOTE_F3: 175,
	NOTE_FS3: 185,
	NOTE_G3: 196,
	NOTE_GS3: 208,
	NOTE_A3: 220,
	NOTE_AS3: 233,
	NOTE_B3: 247,
	NOTE_C4: 262,
	NOTE_CS4: 277,
	NOTE_D4: 294,
	NOTE_DS4: 311,
	NOTE_E4: 330,
	NOTE_F4: 349,
	NOTE_FS4: 370,
	NOTE_G4: 392,
	NOTE_GS4: 415,
	NOTE_A4: 440,
	NOTE_AS4: 466,
	NOTE_B4: 494,
	NOTE_C5: 523,
	NOTE_CS5: 554,
	NOTE_D5: 587,
	NOTE_DS5: 622,
	NOTE_E5: 659,
	NOTE_F5: 698,
	NOTE_FS5: 740,
	NOTE_G5: 784,
	NOTE_GS5: 831,
	NOTE_A5: 880,
	NOTE_AS5: 932,
	NOTE_B5: 988,
	NOTE_C6: 1047,
	NOTE_CS6: 1109,
	NOTE_D6: 1175,
	NOTE_DS6: 1245,
	NOTE_E6: 1319,
	NOTE_F6: 1397,
	NOTE_FS6: 1480,
	NOTE_G6: 1568,
	NOTE_GS6: 1661,
	NOTE_A6: 1760,
	NOTE_AS6: 1865,
	NOTE_B6: 1976,
	NOTE_C7: 2093,
	NOTE_CS7: 2217,
	NOTE_D7: 2349,
	NOTE_DS7: 2489,
	NOTE_E7: 2637,
	NOTE_F7: 2794,
	NOTE_FS7: 2960,
	NOTE_G7: 3136,
	NOTE_GS7: 3322,
	NOTE_A7: 3520,
	NOTE_AS7: 3729,
	NOTE_B7: 3951,
	NOTE_C8: 4186,
	NOTE_CS8: 4435,
	NOTE_D8: 4699,
	NOTE_DS8: 4978
}

function setup() {

    serial = new p5.SerialPort();       // make a new instance of the serialport library
    serial.on('list', printList);  // set a callback function for the serialport list event
    serial.on('connected', serverConnected); // callback for connecting to the server
    serial.on('open', portOpen);        // callback for the port opening
    serial.on('data', serialEvent);     // callback for when new data arrives
    serial.on('error', serialError);    // callback for errors
    serial.on('close', portClose);      // callback for the port closing
   
    serial.list();                      // list the serial ports
	serial.open(portName);
	
	createCanvas(windowWidth, windowHeight);
    mic = new p5.AudioIn()
	fft = new p5.FFT();
	mic.start();
	fft.setInput(mic);
}


function printList(portList) {
    for (var i = 0; i < portList.length; i++) {
         print(i + " " + portList[i]);
    }
}
function serverConnected() {
  print('connected to server.');
}
function portOpen() {
  print('the serial port opened.')
}
function serialEvent() {
}
function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}
function portClose() {
  print('The serial port closed.');
}



function draw() {
    
	const dataValue = serial.read();
	if(dataValue != -1){

		console.log(dataValue);
	}

}
function send0(){
    console.log('ad');
    serial.write('0\n');
}
function send1(){
    console.log('ad');
    serial.write('1\n');
}
function send2(){
    console.log('bbbb');
    serial.write('2\n');
}
function send3(){
    console.log('bbbb');
    serial.write('3\n');
}
function send4(){
    console.log('bbbb');
    serial.write('4\n');
}
function send5(){
    console.log('bbbb');
    serial.write('5\n');
}
function send6(){
    console.log('bbbb');
    serial.write('6\n');
}
function send7(){
    console.log('bbbb');
    serial.write('7\n');
}
function send8(){
    console.log('bbbb');
    serial.write('8\n');
}
function send9(){
    console.log('bbbb');
    serial.write('9\n');
}
function send10(){
    console.log('bbbb');
    serial.write('10\n');
}
function send11(){
    console.log('bbbb');
    serial.write('11\n');
}