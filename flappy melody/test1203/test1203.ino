#include <Stepper.h>

const int stepsPerRevolution = 200;
const int stepsPerRevolution2 = 512;
// change this to fit the number of steps per revolution
Stepper myStepper(stepsPerRevolution, 4, 5, 6, 7);
Stepper myStepper2(stepsPerRevolution, 8, 9, 10, 11);

// number of steps the motor has taken
int eachStep = 25;
int eachStep2 = 25;
int inputNum;
String icmb;
int incomingByte;
int r = 0;
bool Go = false;
int pByte=0;
int i = 0;
void setup() {

    Serial.begin(9600);
    myStepper.setSpeed(60);
    myStepper2.setSpeed(60);
    
    pinMode(2,OUTPUT);
    digitalWrite(2,LOW);
}

void loop() {

    if(Serial.available()>0){
  
        
        icmb = Serial.readStringUntil('\n'); 
        incomingByte = icmb.toInt();

        //decide the direction
        if(incomingByte >=0 && incomingByte <= 12){
            Go = false;
            i = incomingByte - pByte;
            if(i!=0){
              for(int j=0; j<eachStep; j++){
                myStepper2.step(5);
                myStepper.step(i);   
              }
            }
        
            r = r + 1;
            pByte = incomingByte; 
            
//            if(r==1 && incomingByte ==1){
//                Go = true;
//            }
//            else if(r==2 && incomingByte ==6){
//                Go = true;
//            }
//            else if(r==3 && incomingByte ==7) {
//                Go = true;
//            }
//            else if(r==4&&incomingByte==6){
//                 Go = true;
//            }
//            else if(r==5 && incomingByte==5){
//                 Go = true;
//            }
//            else if(r==6 && incomingByte==4){
//                 Go = true;
//            }
//            else if(r==7 && incomingByte==2){
//                 Go = true;
//            }
//            else if(r==8 && incomingByte==1){
//                 Go = true;
//            }
//            else if(r==9 && incomingByte==2){
//                 Go = true;
//            }
//            else if(r==10 && incomingByte==5){
//                 Go = true;
//            }
//            else if(r==11 && incomingByte==3){
//                 Go = true;
//            }
//            else if(r==12 && incomingByte==4){
//                 Go = true;
//            }
//            if(Go == false && r!=0){
//                myStepper.step(-i*incomingByte*eachStep);
//                myStepper2.step(-5*r*eachStep);
//                r = 0;
//            }
//          
//            Serial.write(r);

        }



         
    }
}
