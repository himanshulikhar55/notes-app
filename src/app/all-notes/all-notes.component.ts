import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../note';
import { NOTES } from '../mock-notes';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {
  notes: Array<Note>;
  title = 'notes-app';
  suggestionText: string = "## Heading\nWrite something…";
  // New Note sent by editor.
  @Input() newNote: Note = {} as Note;
  currentNote: Note = {id:1, date: new Date(), content: this.suggestionText};
  // @Output to send note for editing to editor.
  @Output() currentNoteChange = new EventEmitter<Note>();

  constructor() {
    this.notes = [];
  }

  ngOnInit(): void {
    NOTES.sort((a: Note, b: Note) => b.date.getTime() - a.date.getTime());
    this.notes = NOTES;
  }

  setCurrentNote(note: Note): void {
    this.currentNote = note;
    this.currentNoteChange.emit(this.currentNote);
  }
}
