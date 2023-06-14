int IRSensor1 = 7;
int IRSensor2 = 8;
int IRSensor3 = 9;
int IRSensor4 = 10;
void setup() {
  Serial.begin(9600);
  Serial.println("Serial Working");
  pinMode(IRSensor1, INPUT);
  pinMode(IRSensor2, INPUT);
  pinMode(IRSensor3, INPUT);
  pinMode(IRSensor4, INPUT);
}
void loop() {
  int sensorStatus1 = digitalRead(IRSensor1);
  int sensorStatus2 = digitalRead(IRSensor2);
  int sensorStatus3 = digitalRead(IRSensor3);
  int sensorStatus4 = digitalRead(IRSensor4);
  if (sensorStatus1 == 1) {
    Serial.print("1");
  }
  else if (sensorStatus1 == 0) {
    Serial.print("0");
  }
  if (sensorStatus2 == 1) {
    Serial.print("1");
  }
    else if (sensorStatus2 == 0) {
    Serial.print("0");
  }
  if (sensorStatus3 == 1) {
    Serial.print("1");
  }
    else if (sensorStatus3 == 0) {
    Serial.print("0");
  }
  if (sensorStatus4 == 1) {
    Serial.print("1");
  }
    else if (sensorStatus4 == 0) {
    Serial.print("0");
  }
  Serial.println("");
  delay(5000);
}