import { Component, OnInit } from '@angular/core';

import {Note} from '../note';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  suggestionText: string = "## Heading\nWrite something…";
  currentNote: Note | undefined;
  currentView: "edit" | "preview";
  text: string;
  displayTogether: boolean;
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
    }
    else {
      // Nothing to do.
    }
  }


  constructor() {
    this.currentView = "preview";
    this.text = this.suggestionText;
    this.displayTogether = true;
  }

  ngOnInit(): void {
  }

}
