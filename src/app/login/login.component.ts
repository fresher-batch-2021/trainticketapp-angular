import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string="";
  email: string="";

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    // alert("Login Button Clicked");
    // alert("User Name: " + this.userName);
    // alert("Password: " + this.password);
    let email=this.email;
    let password=this.password;
    let formvalues = {
      "email": email,
      "password": password
  };
    if(email == "" || email == null || email.trim() == ""){
        alert("Invalid Email");
    }
    else{
        
    if(password.length < 4){
        alert("Invalid Password");
    }
      else{
        const url="https://product-mock-api.herokuapp.com/trainapp/api/v1/auth/login";
        axios.post(url,formvalues).then(res=>{
            alert("login succesful");
            window.location.href="list-train";
        }).catch(err=>{
            alert("login failed");
        });
       
      
    }




  }
}



  }

