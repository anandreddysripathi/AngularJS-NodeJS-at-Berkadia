import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 arr:any=[];
  constructor(private httpClient:HttpClient) { }
  
  getImagesjson(i:string)
  {
    
    const imagesURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US&page='+i;
     
    var res = this.httpClient.get(imagesURL);
    return res;
  } 
  
  getDetails(movieId) {
    const link = 'https://api.themoviedb.org/3/movie/'+movieId+'?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US';
    const res2 = this.httpClient.get(link);
    console.log(movieId);
    return res2;
  }
}
