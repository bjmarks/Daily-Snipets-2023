package Java.Snippet_211;

import java.util.ArrayList;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import Java.Snippet_210.Reader;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

    @CrossOrigin
    @AllArgsConstructor
    @RestController
    @RequestMapping(value = "/api/comics", produces = "application/json")
    public class Controller {
        private comicsRepository comicsRepository;
        @GetMapping("/{id}")
        public Optional<Reader> fetchComicById(@PathVariable long id) {
            Optional<Reader> optional = comicsRepository.findById(id);
            if(optional.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comic " + id + " not found");
            }
            return optional;
        }
        @GetMapping("")
        public List<ComicFetchDTO> fetchComics(){
            List<Reader> comics = comicsRepository.findAll();
            List<comicFetchDTO> comicDTOs = new ArrayList<>();
            for (comic comic : comics ){
                comicFetchDTO comicDTO = new comicFetchDTO();
                comicDTO.setId(comic.getId());
                comicDTO.setcomicName(comic.getcomicName());
                comicDTO.setEmail(comic.getEmail());
                comicDTO.setRole(comic.getRole());
                comicDTO.setProfilePic(comic.getProfilePic());
                comicDTOs.add(comicDTO);
            }
            return comicDTOs;
        }
        @PostMapping("/create")
        public void createComic(@RequestBody Reader newComic) {
            newComic.setEngTitle(newComic.getEngTitle());
            newComic.setAuthor(newComic.getAuthor());
            newComic.setChapters(newComic.getChapters());
            newComic.setDescription(newComic.getDescription());
            newComic.setGenre(newComic.getGenre());
            comicsRepository.save(newComic);
        }
        @DeleteMapping("/{id}")
        public void deleteComicById(@PathVariable long id) {
            Optional<Reader> optional = comicsRepository.findById(id);
            if(optional.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comic " + id + " not found");
            }
            comicsRepository.deleteById(id);
        }
        @PutMapping("/{id}")
        public void updateComic(@RequestBody Reader updatedComic, @PathVariable long id) {
            Optional<Reader> optional = comicsRepository.findById(id);
            if(optional.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Comic " + id + " not found");
            }
            Reader originalComic = optional.get();
            BeanUtils.copyProperties(updatedComic, originalComic, FieldHelper.getNullPropertyNames(updatedComic));
            originalComic.setId(id);
            comicsRepository.save(originalComic);
        }
    }