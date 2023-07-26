package Java.Snippet_205;

import org.springframework.security.crypto.bcrypt.BCrypt;

public class bcrypt {
    private String password = "password";
    private String hashed = BCrypt.hashpw(password, BCrypt.gensalt(10));
    public void checkPass(String password) {
        if(BCrypt.checkpw(password, hashed)) {
            System.out.println("right");
        }
        else {
            System.out.println("wrong");
        }
    }
}
