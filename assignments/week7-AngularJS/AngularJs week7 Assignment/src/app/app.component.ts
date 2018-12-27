import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public ActualData;

  constructor(private readonly DataFromApi:DataService){}
  ngOnInit(){
    this.DataFromApi.getData("https://swapi.co/api/films/").subscribe((response:any)=>{
      console.log(response);
      this.ActualData=response.results;
    });
  }
}
