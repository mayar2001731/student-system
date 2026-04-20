import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html'
})
export class StudentTableComponent {
//receive data students of type array from parent (students component)
  @Input() students: Student[] = [];
// send data to students component (id)
  @Output() deleteStudent = new EventEmitter<number>();
// inject router to use it in navigation
  constructor(private router: Router) {}

  view(id: number) {
    this.router.navigate(['/student', id]);
  }
//send event to parent to delete student of this id 
  delete(id: number) {
    this.deleteStudent.emit(id);
  }
}