import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '.././models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent {
//parent component take data from service and send it to table
  students: Student[] = [];

  constructor(private service: StudentsService) {}

  ngOnInit() {
    this.service.getStudents().subscribe(res => {
      this.students = res;
    });
  }

  delete(id: number) {
    this.service.deleteStudent(id);
  }
}