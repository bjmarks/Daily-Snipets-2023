#define D_NOTE  587
#define REST      0

int tempo = 103;
int buzzer = 11; // pin 11
// note 1 - D eighth note
// note 2 - D eighth note
// note 3 - D eighth note
// note 4 - D quarter notes
// note 5 - D eighth + half note
int melody[] = {
  
};
int notes = sizeof(melody) / sizeof(melody[0]) / 2;
int wholenote = (60000 * 2) / tempo;
int divider = 0, noteDuration = 0;
void setup() {
  for (int thisNote = 0; thisNote < notes * 2; thisNote = thisNote + 2) {
    divider = melody[thisNote + 1];
    if (divider > 0) {
      noteDuration = (wholenote) / divider;
    } else if (divider < 0) {
      noteDuration = (wholenote) / abs(divider);
      noteDuration *= 1.5;
    }
    tone(buzzer, melody[thisNote], noteDuration*0.9);
    delay(noteDuration);
    noTone(buzzer);
  }
}
void loop() {
  // no need to repeat the melody.
}