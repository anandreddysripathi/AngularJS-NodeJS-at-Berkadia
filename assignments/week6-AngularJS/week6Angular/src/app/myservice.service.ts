import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }
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