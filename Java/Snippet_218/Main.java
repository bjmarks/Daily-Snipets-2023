package Java.Snippet_218;

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        try (Scanner greeting = new Scanner(System.in)) {
            System.out.println("Enter greetings");
            String greet = greeting.nextLine();
            System.out.println(greet);
        }
    }
}