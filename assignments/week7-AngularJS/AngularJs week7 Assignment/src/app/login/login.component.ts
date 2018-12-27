import { DataService } from './../data.service';
import { RouterModule , Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
 
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {
 
  constructor(private service : DataService , private routes: Router) { }
msg;
  ngOnInit() {
  }
  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/HomePage']);
    }
    else{
      this.msg ='Invalid username or password';
    }
  }
 
}