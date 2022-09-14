import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../note';
import { NOTES } from '../mock-notes';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {
  notes: Array<Note> = NOTES;
  title = 'notes-app';
  suggestionText: string = "## Heading\nWrite something…";
  @Input() currentNote: Note = {id:1, date: new Date(), content: this.suggestionText};
  // @Input to allow editor to update note live.
  // @Input() currentNote: Note | null = null;
  // @Output to send note for editing to editor.
  @Output() currentNoteChange = new EventEmitter<Note>();
  
  constructor() { }

  ngOnInit(): void {
  }

  setCurrentNote(note: Note): void {
    this.currentNote = note;
    this.currentNoteChange.emit(this.currentNote);
  }
}
