#include<studio.h>
#include<conio.h>
#include<dos.h>

void main() {
    clrscr();
    int i;
    textcolor(RED);
    textbackgroung(WHITE);
    for( i = 0; i < 120; i++) {
        cprintf("   I LOVE YOU \3   "); // repeats "I LOVE YOU <3 120 times"
        delay(200);
    }
    getch();
}