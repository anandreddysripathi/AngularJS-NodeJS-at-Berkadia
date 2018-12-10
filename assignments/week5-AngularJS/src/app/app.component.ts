import { Component } from '@angular/core';
import {MyService} from 'src/app/service';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //using dependency Injection 
  public parties=[];
  constructor(private readonly data:MyService){this.parties=this.data.getData()}

  title = 'Anand';
  dob;
  public hide=true
  thisYear=(new Date()).getFullYear();
 
  // the below function sets the hidden part to visible on clicking on the button
   onClick(){    
  this.hide=false
  } 
  
  public Event=
  {
    'EventName':'Polling',
    'location':'hyderabad'
  }
 
  //to be used in ngClass
  public class1={"safe":true}
  public class2={"moderate":true}
  public class3={
    "moderate":true,
    "danger":true
  }
  public styles={
    fontSize:"2em",
    fontStyle:"italic"
  }
 }
