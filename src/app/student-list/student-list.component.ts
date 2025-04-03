import {Component, OnInit} from '@angular/core';
import {Student, StudentService} from '../student.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [
    NgForOf
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    // Subscribe to the students list observable
    this.studentService.students$.subscribe(students => {
      this.students = students;
    });
  }
}
