import { Component, Input } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes-app';
  suggestionText: string = "## Heading\nWrite something…";
  currentNote: Note = {id:1, date: new Date(), content: this.suggestionText};
}
