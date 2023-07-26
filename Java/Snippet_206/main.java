package Java.Snippet_206;

import java.util.HashSet;

public class main {
    public static void main(String[] args) {
        HashSet<String> cars = new HashSet<String>();
        cars.add("Volvo");
        cars.add("Hyundai");
        cars.add("Ford");
        cars.add("BMW");
        cars.add("Audi");
        cars.add("BMW");
        System.out.println(cars); //  Volvo, Hyundai, Ford, BMW, Audi
    }
}
