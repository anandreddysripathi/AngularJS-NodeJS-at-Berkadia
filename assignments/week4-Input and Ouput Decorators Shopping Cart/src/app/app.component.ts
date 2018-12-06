import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public name="Anand";
  public message="0 ";
  public products:string[]=["Product1","Product2",,"Product3","Product4","Product5"];
}