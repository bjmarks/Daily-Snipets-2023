void setup() {
    Serial.begin(9600);
    for(int i = 0; i <= 5; i++) {
        for(int j = 0; j <= i; j++) {
            Serial.print("*");
        }
        Serial.println();
        // prints out   *
        //              **
        //              ***
        //              ****               
        //              *****              

    }
}
void loop(){
    // loops infinitly
}