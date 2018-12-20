import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-details',
  template: `
  <div style="text-align:center">
    <h3>You selected department with id:{{departmentId}}</h3>  
    <i class="fas fa-arrow-circle-left"></i>  <a (click)="goPrevious()">Previous</a><br> 
    <a (click)="goNext()">Next</a><i class="fas fa-arrow-circle-right"></i><br><br>
    
    <button (click)="goBack()">Back</button>
    </div>
    `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //since the snapshot will not work again we use params Observable approach
  //  let id=parseInt(this.route.snapshot.paramMap.get('id'));
  // this.departmentId=id;
  this.route.paramMap.subscribe((params:ParamMap)=>{
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
   this.departmentId=id;
  })
  }

  goPrevious()
  {
    let previousId=this.departmentId-1;
    this.router.navigate(['/departments',previousId]);
  }

  goNext(){
  let nextId=this.departmentId+1;
  this.router.navigateByUrl('/departments/'+nextId);
  }

  goBack()
  {
   let selectedId=this.departmentId?this.departmentId:null;
   this.router.navigate(['/departments',{id:selectedId}]);
  }
}
