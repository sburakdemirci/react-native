package com.disciplinebe.disciplinebe.controller;

import com.disciplinebe.disciplinebe.exception.ResourceNotFoundException;
import com.disciplinebe.disciplinebe.model.Note;
import com.disciplinebe.disciplinebe.repository.NoteRepository;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by rajeevkumarsingh on 27/06/17.
 */
@RestController
@RequestMapping("/api")
public class NoteController {

    @Autowired
    NoteRepository noteRepository;

    @ApiOperation(value = "Just to test the sample test api of My App Service")
    @RequestMapping(method = RequestMethod.GET, value = "/test")
    // @Produces(MediaType.APPLICATION_JSON)
    public String test(@RequestParam String string) {
        return string;
    }
    @RequestMapping(method = RequestMethod.GET, value = "/test1")
    public String test1() {
        return "test11111donus";
    }

    @GetMapping("/notes")
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    @PostMapping("/notes")
    public Note createNote(@Valid @RequestBody Note note) {
        return noteRepository.save(note);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/slm")
    public Note slm(){

        Note note = new Note();
        note.setTitle("etkinlikadiğğüüıı");
        note.setContent("contentadi");
        Note note1 =noteRepository.save(note);
        return note1;
    }


    @PutMapping("/notes/{id}")
    public Note updateNote(@PathVariable(value = "id") Long noteId,
                                           @Valid @RequestBody Note noteDetails) {

        Note note = noteRepository.findById(noteId)
                .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));

        note.setTitle(noteDetails.getTitle());
        note.setContent(noteDetails.getContent());

        Note updatedNote = noteRepository.save(note);
        return updatedNote;
    }

    @DeleteMapping("/notes/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable(value = "id") Long noteId) {
        Note note = noteRepository.findById(noteId)
                .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));

        noteRepository.delete(note);

        return ResponseEntity.ok().build();
    }
}
