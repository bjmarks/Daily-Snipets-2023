package Java.Snippet_209;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class Main {
    PasswordEncoder passwordEncoder;
    public test(String password) {
        this.passwordEncoder = new BCryptPasswordEncoder();
        String result = passwordEncoder.encode(password);
        System.out.println(result);
    }
    public static void main(String[] args) {
        new test("password");
    }
}