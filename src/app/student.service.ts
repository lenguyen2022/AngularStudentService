import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Student {
  id: number;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private studentsList: Student[] = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Sam Brown', age: 21 },
  ];
  // studentsSubject is used to notify subscribers
  private studentsSubject = new BehaviorSubject<Student[]>(this.studentsList);

  // Observable to allow components to subscribe to the list
  students$ = this.studentsSubject.asObservable();

  constructor() {}

  // Method to get the list of students
  getStudents(): Student[] {
    return this.studentsList;
  }

  // Method to add a student
  addStudent(student: Student): void {
    this.studentsList.push(student);
    this.studentsSubject.next(this.studentsList);  // Notify subscribers
  }

  // Method to remove a student
  removeStudent(id: number): void {
    this.studentsList = this.studentsList.filter(student => student.id !== id);
    this.studentsSubject.next(this.studentsList);  // Notify subscribers
  }
}
