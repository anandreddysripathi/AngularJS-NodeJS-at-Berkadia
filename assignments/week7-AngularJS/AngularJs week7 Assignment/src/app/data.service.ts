import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http:HttpClient) { }
   //this function takes an api as arguement and returns the json data needed
  getData(url:string):any{
    return this.http.get(url);
  }

  //this function is used to check whether user is valid or not
  public checkusernameandpassword(uname: string, pwd : string)
  {
if(uname == "anand" && pwd =="vivek"){
localStorage.setItem('username',"admin");
return true;
}
else{
  return false;
}
  }
}
