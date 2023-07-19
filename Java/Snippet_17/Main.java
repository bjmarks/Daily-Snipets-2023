package Java.Snippet_17;
public class Main {
    public static void main(String[] args) {
        int number = 100;
        for( int i = 1; i <= number; i++) {
            if(i % 3 == 0 && i % 5 == 0) {
                System.out.println("fizzbuzz");
            } else if(i % 3 == 0) {
                System.out.println("fizz");
            } else if(i % 5 == 0) {
                System.out.println("buzz");
            }
            else {
            System.out.println(i);
            }
        }
    }
}