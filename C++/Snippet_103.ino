#include <Wire.h>
#include <TEA5767Radio.h>
// SDA to pin 4 analog
// SLC to pin 5 analog
// +5V to pin 5V
// GND to pin GND
TEA5767Radio radio = TEA5767Radio();
void setup() {
  Wire.begin();
  radio.setFrequency(96.9);
}
void loop() {
  // no need to repeat
}