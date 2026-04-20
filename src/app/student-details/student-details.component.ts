import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // to get url and get id from it
import { StudentsService } from '../students.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html'
})
export class StudentDetailsComponent {

  student?: Student; // create variable from type student

  constructor(
    private route: ActivatedRoute,
    private service: StudentsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // snapshot--> get current url once paramMap-->object contain all parameters
    this.student = this.service.getStudentById(id);
  }
}