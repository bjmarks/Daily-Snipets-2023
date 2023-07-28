package Java.Snippet_208;

import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("Ford");
        cars.add("Hyundai");
        Iterator<String> iterator = cars.iterator();
        System.out.println(iterator.next());
    }
}