import { Component,OnInit } from '@angular/core';
import { AppService } from './app.service';
import { trigger, state, style, animate, transition } from '@angular/animations';import { DirectiveNormalizer } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('changeState', [
      state('normal', style({
       
        display:'none',
        transform: 'scale(0,0)',
        opacity:0
      })),
      state('animatedin', style({
        display:'block',
        transform: 'scale(1,1)',
        opacity:1
      })),
      state('animatedout', style({
        display:'block',
        transform: 'scale(0,0)',
        opacity:0
      })),
      transition('*=>normal', animate('0ms')),
      transition('*=>animatedin', animate('1000ms')),
      transition('*=>animatedout', animate('1000ms'))
    ])
  ]
})
export class AppComponent implements OnInit{
  title = 'movielist by anand';
  result:any=[];
  result2:any=[];
  posterurl:string;
  status='normal';
  urlstart:string='http://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  
  constructor(private serviceapp:AppService)
  {
    this.posterurl="";
  }
  ngOnInit() {
    this.serviceapp.getImagesjson('1').subscribe((res) => {
      this.result=(res['results']);
      console.log(this.result);
    }); 
    /*for(var i=1;i<10;i++)
    {
      this.serviceapp.getImagesjson(i.toString()).subscribe((res) => {
        this.result = [ ...this.result, ...res['results']];
        console.log(this.result);
       // this.result=(res['results']);
    });
    } */ // for adding all at a once
      
    
  }
  
  MovieId(movieid:string)
  {
    var t;
      this.serviceapp.getDetails(movieid).subscribe((res)=>{
        this.posterurl=this.urlstart+res['poster_path'];
        console.log(res);
        this.result2=res;
      });
      this.status='animatedin';
      //this.modalstat=true;
      
  }
  change(i:string)
  {

    this.serviceapp.getImagesjson(i).subscribe((res) => {
      this.result=res['results'];
      console.log(this.result);
     });
  }

  

  onModalStat(event:any)
  {
    this.status='animatedout';
    //this.modalstat=false;
  }
}
