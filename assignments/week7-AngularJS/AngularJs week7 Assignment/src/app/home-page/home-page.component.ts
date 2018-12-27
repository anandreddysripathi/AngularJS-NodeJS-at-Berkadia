import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public ActualData;

  constructor(private readonly DataFromApi:DataService){}
  //here extracting the movies list from the api
  ngOnInit(){
    this.DataFromApi.getData("https://swapi.co/api/films/").subscribe((response:any)=>{
      console.log(response);
      this.ActualData=response.results;
    });
  }
}