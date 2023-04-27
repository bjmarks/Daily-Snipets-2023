#include <Stepper.h>
const int stepsPerRevolution = 100;
Stepper myStepper(stepsPerRevolution, 8, 9);
void setup() {
//   Serial.begin(9600);
// ringer for mecanical bell from a rotary phone
}
void loop() {
  for(int ms = 0; ms <= 100; ms++){
  int sensorReading = analogRead(A0);
  int motorSpeed = map(sensorReading, 0, 1023, 0, 100);
  if (motorSpeed > 0) {
    myStepper.setSpeed(motorSpeed);
    myStepper.step(stepsPerRevolution / 100);
  }
//   Serial.println(ms);
  }
  myStepper.step(0);
  delay(2500);
}