package Java.Snippet_27.java.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;

@Controller
public class FileUploadController {
    @GetMapping("/index")
    public String upload(){
        return "uploader";
    }
    @GetMapping("/return")
    public String redirect(){
        return "return";
    }
    @PostMapping("/upload")
    public ResponseEntity<?> fileUpload(@RequestParam("file")MultipartFile file) {
        String fileName = file.getOriginalFilename();
        fileName = "img01.jpg";
        try {
            file.transferTo(new File("C:/Users/Marks/Documents/mac/Github/UploadDemo/src/main/resources/templates/data/" + fileName));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return  ResponseEntity.ok("File uploaded Successfully.");
    }
}
