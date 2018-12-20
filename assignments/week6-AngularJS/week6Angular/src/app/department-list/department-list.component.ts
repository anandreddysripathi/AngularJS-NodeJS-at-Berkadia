import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <p>
      Departments
      </p>
      <div style="text-align:center">
      <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
      <i class="fas fa-building"></i>&nbsp;&nbsp;<span class="badge">{{department.id}}</span>{{department.name}}
      </li>
      </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router) { }
    departments=[
      {"id":1,"name":"CSE"},
      {"id":2,"name":"ECE"}
    ]
  ngOnInit() {
  }
  onSelect(department){
    //using navigate
   this.router.navigate(['/departments',department.id]);
  }

}
