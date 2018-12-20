import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  template: `
  <div style="text-align:center">
    <p>
    you selected student with id:{{studentId}} 
    </p>
    <i class="fas fa-arrow-circle-left"></i> 
   <a (click)="goPrevious()">Previous</a><br>  
    <a (click)="goNext()">Next</a><i class="fas fa-arrow-circle-right"></i><br><br>
    <button (click)="goBack()">Back</button>
    </div>
    `,
  styles: []
})
export class StudentDetailsComponent implements OnInit {

  public studentId;
  constructor(private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit() {
    // let id=parseInt(this.route.snapshot.paramMap.get('id'));
    // this.studentId=id;
   this.route.paramMap.subscribe((params:ParamMap)=>{
   let id=parseInt(this.route.snapshot.paramMap.get('id')) ;
   this.studentId=id;
  })
  }
  
  goPrevious(){
    let previousId=this.studentId-10;
  this.router.navigate(['/students',previousId]);
  }
  goNext(){
    let nextId=this.studentId+10;
    this.router.navigate(['/students',nextId]);
  }
  goBack()
  {
   this.router.navigate(['/students']);
  }
}
