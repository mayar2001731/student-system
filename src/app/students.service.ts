import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  //create container = behavior subject
  private students = new BehaviorSubject<Student[]>([
    {
      id: 1,
      firstName: "Ali",
      lastName: "Hassan",
      age: 21,
      gender: "Male",
      email: "ali@email.com",
      phone: "01000000000",
      address: "Cairo",
      city: "Cairo",
      country: "Egypt",
      department: "CS",
      level: 3,
      GPA: 3.2,
      enrollmentDate: "2023-09-01",
      isActive: true
    }
  ]);

  students$ = this.students.asObservable(); // convert to observabl so component can read it 

  getStudents() {
    return this.students$;
  }

  addStudent(student: Student) {
    this.students.next([...this.students.value, student]);
  }

  deleteStudent(id: number) {
    this.students.next(
      this.students.value.filter(s => s.id !== id)
    );
  }

  getStudentById(id: number) {
    return this.students.value.find(s => s.id === id);
  }
}