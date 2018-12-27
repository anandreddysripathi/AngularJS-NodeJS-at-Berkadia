import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private readonly DataFromApi:DataService,private route:ActivatedRoute,private router:Router) { }
  
  
  MovieData;
  MovieUrl;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.MovieUrl=params.get("episode_id");
    });
    
     //extracting the required film here below and passing it to MovieData variable

    this.DataFromApi.getData("https://swapi.co/api/films/ "+this.MovieUrl).subscribe((res:any)=>{
      this.MovieData=res;    
    });

  }

}
