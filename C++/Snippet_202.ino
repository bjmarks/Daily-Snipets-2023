#define NOTE_G5  784
#define NOTE_FS5 740
#define NOTE_E5  659
int tempo = 103;
int buzzer = 11;
int melody[] = {
  NOTE_G5, 4, NOTE_G5, 4, NOTE_E5, 4, NOTE_E5, 4, NOTE_FS5, 2
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