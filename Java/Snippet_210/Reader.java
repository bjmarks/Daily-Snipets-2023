package Java.Snippet_210;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.annotation.Inherited;
import java.sql.Date;
import javax.annotation.processing.Generated;
import javax.persistence.*;
import lombok.*

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "comics")
public class Reader {
    @Id
    @GeneratedValue(strategy = GeneratedType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true, length = 255)
    private String engTitle;
    @Column(nullable = true, unique = true, length = 255)
    private String commonTitle1;
    @Column(nullable = true, unique = true, length = 255)
    private String nativeTitle2;
    @Column(nullable = false, length = 255)
    private String countryOfOrigin;
    @Column(nullable = false, length = 255)
    private String author;
    @Column(nullable = false, length = 255)
    private String status;
    @Column(nullable = false, length = 255)
    private Date releasDate;
    @Column(nullable = false, unique = true, length = 255)
    private String description;
    @Column(nullable = false, length = 255)
    private float chapters;
    @Column(nullable = true, length = 255)
    private Genre genre;
}