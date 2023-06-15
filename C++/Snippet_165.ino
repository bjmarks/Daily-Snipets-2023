int IRSensor1 = 7;
int IRSensor2 = 8;
int IRSensor3 = 9;
int IRSensor4 = 10;
int p1 = 0;
int p2 = 0;
int p3 = 0;
int p4 = 0;
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
  String code;
  if (sensorStatus1 == 1) {
    p1 = 1;
  }
  else if (sensorStatus1 == 0) {
    p1 = 0;
  }
  if (sensorStatus2 == 1) {
    p2 = 1;
  }
    else if (sensorStatus2 == 0) {
    p2 = 0;
  }
  if (sensorStatus3 == 1) {
    p3 = 1;
  }
    else if (sensorStatus3 == 0) {
    p3 = 0;
  }
  if (sensorStatus4 == 1) {
    p4 = 1;
  }
    else if (sensorStatus4 == 0) {
    p4 = 0;
  }
  code = String(p1) + String(p2) + String(p3) + String(p4);
  Serial.println(code);
  delay(5000);
}