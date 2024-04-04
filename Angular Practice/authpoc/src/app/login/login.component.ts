import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  name: string='';
  password: string='';
  http: any;

  constructor() { }

  login() : void {
    const formData = {
      name: this.name,
      password: this.password
    };
    this.http.post('http://localhost:3000/api/login', formData)
    .subscribe(
      (      response: any) => {
        console.log(' successful:', response);
        
      },
      (      error: any) => console.error('Error registering user:', error)
    );
    
    }
  }