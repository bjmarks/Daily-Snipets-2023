package Java.Snippet_207;

import java.util.HashMap;

public class main {
  public static void main(String[] args) {
    HashMap<String, String> capitalCities = new HashMap<String, String>();
    HashMap<String, Integer> peopleAge = new HashMap<String, Integer>();
    capitalCities.put("England", "London");
    peopleAge.put("john", 2);
    capitalCities.put("Germany", "Berlin");
    peopleAge.put("carl", 32);
    capitalCities.put("Norway", "Oslo");
    peopleAge.put("Ben", 26);
    capitalCities.put("USA", "Washington DC");
    peopleAge.put("Ann", 24);
    System.out.println(capitalCities);
    System.out.println(peopleAge);
  }
}