namespace C.Snippet;

public class User {
    public User(string name, int age) =>
        (name, Age) = (name, age);
    public string Name { get; }
    public int Age { get; }

}

// expression body constructor