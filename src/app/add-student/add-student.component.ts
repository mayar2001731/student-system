import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; // to build form and make validation on it
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent {
// build formgroup
  form = this.fb.group({
    id: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    department: ['', Validators.required],
    GPA: ['', Validators.required]
  });


  constructor(
    private fb: FormBuilder, // take copy of formbuilder store it in fb variable
    private service: StudentsService,
    private router: Router
  ) {}

  // function to send new student data to service function(add student)
  submit() {
    if (this.form.valid) {
      this.service.addStudent(this.form.value as any);
      this.router.navigate(['/students']);
    }
  }
}