import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {Note} from '../note';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  suggestionText: string = "## Heading\nWrite something…";
  @Input() currentNote: Note = {id:1, date: new Date(), content: this.suggestionText};
  @Output() currentNoteChange = new EventEmitter<Note>();
  currentView: "edit" | "preview";
  text: string;

  onEdit(): void {
    if (this.currentView === "preview") {
      this.currentView = "edit";
    }
    else {
      // Nothing to do.
    }
  }
  onPreview(): void {
    if (this.currentView === "edit") {
      this.currentView = "preview";
      this.currentNoteChange.emit(this.currentNote);
    }
    else {
      // Nothing to do.
    }
  }
  onDelete(): void {
    // Do nothing for now.
  }

  onEditMouseDown(event: Event): void {
    this.onEdit();
  }

  constructor() {
    this.currentView = "preview";
    this.text = this.currentNote.content;
  }

  ngOnInit(): void {
  }

}
