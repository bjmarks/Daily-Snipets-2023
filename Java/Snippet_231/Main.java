package Java.Snippet_231;

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        try (Scanner askAge = new Scanner(System.in)) {
            System.out.println("Enter your age");
            int age = askAge.nextInt();
            System.out.println(age);
        }
    }
}