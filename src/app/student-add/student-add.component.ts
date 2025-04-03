import { Component } from '@angular/core';
import {Student, StudentService} from '../student.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-student-add',
  imports: [
    FormsModule
  ],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
  newStudent: Student = { id: 0, name: '', age: 0 };

  constructor(private studentService: StudentService) {}

  addStudent(): void {
    this.studentService.addStudent(this.newStudent);
    // Reset form
    this.newStudent = { id: 0, name: '', age: 0 };
  }
}
