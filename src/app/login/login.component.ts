import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string="";
  userName: string="";

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    // alert("Login Button Clicked");
    // alert("User Name: " + this.userName);
    // alert("Password: " + this.password);
    let userName=this.userName;
    let password1=this.password;
    if(userName == "" || userName == null || userName.trim() == "" || userName != "admin123"){
        alert("Invalid User Name");
    }
    else{
        
    if(password1.length < 4 || password1 != "1234"){
        alert("Invalid Password");
    }
    else{
       
        alert("Form submission completed");
    window.location.href = "list_train.html";
    }
}



  }
}
