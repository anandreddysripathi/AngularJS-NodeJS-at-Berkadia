import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
@Component({
  selector: 'app-student',
  template: `
  <div style="text-align:center">  
  <p>
      Students
    </p>
    <ul class="items">
    <li (click)="onSelect(student)" *ngFor="let student of students">
    <i class="fas fa-graduation-cap"></i>        <span class="badge">{{student.id}}</span>{{student.name}}
    </li>
    </ul>
    </div>
  `,
  styles: []
})
export class StudentComponent implements OnInit {

  constructor(private router:Router) { }
 
  students=[
    {"id":10,"name":"Anand"},
    {"id":20,"name":"Vivek"},
    {"id":30,"name":"sandesh"},
    {"id":40,"name":"tarun"}
  ]
  ngOnInit() {
  }
  onSelect(student){
   //here i navigate by using navigateByUrl
    this.router.navigateByUrl('/students/'+student.id);
   //I can do the same by using this.router.navigate(['/student',student.id])
  }
}
