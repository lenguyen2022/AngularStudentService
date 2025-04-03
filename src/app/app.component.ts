import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentAddComponent} from './student-add/student-add.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent, StudentAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentService';
}
