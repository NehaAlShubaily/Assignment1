import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: any[] = [
    { name: 'Sam', email: 'sam@gmail.com', marks: 59 },
    { name: 'tam', email: 'tam@gmail.com', marks: 30 },
    { name: 'John', email: 'john@gmail.com', marks: 67 },
    { name: 'Jacob', email: 'jacob@gmail.com', marks: 24 },
    { name: 'Peter', email: 'peter@gmail.com', marks: 98 },
    { name: 'parker', email: 'parker@gmail.com', marks: 19 },

  ];
}
