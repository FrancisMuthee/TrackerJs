import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SubjectsComponent } from "./subjects/subjects.component";
import { PremiumComponent } from "./premium/premium.component";
import { NotesComponent } from "./notes/notes.component";
import { IntroComponent } from "./intro/intro.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, SubjectsComponent, PremiumComponent, NotesComponent, IntroComponent]
})
export class AppComponent {
  title = 'dracula';
}
