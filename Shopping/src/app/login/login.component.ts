import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup
  errorMessage: string;

  constructor(
    private dataservice: DataserviceService,
    private router: Router,
  ) {}

// Validator usage for form logins
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email]),

      password: new FormControl(null,
        Validators.required),
    });
  }
  onSubmit(){
    const userInfo = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    // login process control and error message
    this.dataservice.getData().subscribe(users => {
      users.forEach(user => {
        if(userInfo.email == user.email && userInfo.password == user.password){
          localStorage.setItem('user', JSON.stringify(user));
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        }else{
          this.errorMessage = 'No registered subscriber';
          this.timer();
        }
      });
    })
  }
// to show user invalid attempt by timer
  timer(){
    setTimeout(() =>{
      this.errorMessage = '';
    }, 10000)
  }
}

