import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {Note} from '../note';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  suggestionText: string = "## Heading\nWrite something…";
  @Input() currentNote: Note = {id: 1, date: new Date(), content: this.suggestionText};
  currentView: "edit" | "preview";
  text: string = '';

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
      // this.currentNoteChange.emit(this.currentNote);
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

  onSave() {
    console.log('On Save');
  }

  onDiscard() {
    // Ask user to confirm. Need functionality here.
    this.text = this.currentNote.content;
    console.log('On Discard');
  }

  onNew() {
    // If user has edited an existing note and not saved, ask to save/discard.
    console.log('On New');
    this.currentNote = {
      id: 1,
      date: new Date(),
      content: this.suggestionText
    }
    this.text = this.suggestionText;
  }

  constructor() {
    this.currentView = "preview";
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentNote'].isFirstChange()) {
      this.text = this.currentNote.content;
    }
    else {
      if (changes['currentNote'].previousValue.content !== this.text) {
        this.onDiscard();
      }
      else {
        this.text = this.currentNote.content;
      }
    }
  }
}