import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string="";
  password: string="";
  confirmPassword: string="";
  firstName: string="";
  middleName: string="";
  lastName: string="";
  gender: string="";
  dob: string="";
  mobile: string="";
  
  constructor() { }

  ngOnInit(): void {
  }

checkConf(){

  let email=this.email;
  let password=this.password;
  let confirmPassword=this.confirmPassword;
  let firstName=this.firstName;
  let middleName=this.middleName;
  let lastName=this.lastName;
  let gender=this.gender;
  let dob=this.dob;
  let mobile=this.mobile;

    console.log(email + "+" + password + "+" + confirmPassword + "+" + firstName + "+" + middleName + "+" + lastName + "+" + gender + "+" + dob +"+" + mobile);

    let formvalues = {
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword,
        "name": firstName,
        "middleName": middleName,
        "lastName": lastName,
        "gender": gender,
        "dob": dob,
        "mobile": mobile
    };
    console.log(formvalues);


    if(email == "" || email == null || email.trim() == ""){
        alert("Email must not be Empty");
    }
    else if(password.length < 4 || confirmPassword.length < 4 || password != confirmPassword){
        alert("Invalid Password and Confirm Password");
    }
    
  //   else if(mobile.length < 11){
  //     alert("Invalid Mobile Number");
  // }
    else{
        
        const url="https://product-mock-api.herokuapp.com/trainapp/api/v1/auth/register";
        axios.post(url,formvalues).then(res=>{
            alert("Register successful");
            window.location.href="login";
        }).catch(err=>{
            alert("Register failed");
        });
       

}
}

}
