int pot = A1; // pin 15 for teensy audio adapter vol pin
int x;
float val;
void setup() {
  Serial.begin(9600);
  pinMode(A1, INPUT);
}
void loop() {
  x = analogRead(pot);
  val = map(x, 0, 1023, 0, 100);
  Serial.println(val/100);
  delay(500);
}