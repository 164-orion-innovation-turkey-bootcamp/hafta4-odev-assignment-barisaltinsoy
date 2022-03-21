import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public loginForm!: FormGroup;
  errorMessage: string;

  constructor(private dataService: DataserviceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({

      name_surname:new FormControl(null),

      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl(null,
        Validators.required
      )
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      const userInfo = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    this.dataService.postData(userInfo).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login']);
      });
    }
  }
}
