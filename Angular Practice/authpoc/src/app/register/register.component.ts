import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  registrationSuccess: boolean = false;

  constructor(private http: HttpClient) {}

  // register(): void {
  //   const formData = {
  //     name: this.username,
  //     email: this.email,
  //     password: this.password
  //   };

  //   // Make sure to replace 'http://localhost:3000/api/signup' with your actual backend API endpoint
  //   this.http.post('http://localhost:3000/api/signup', formData)
  //     .subscribe(
  //       response => {
  //         console.log('Registration successful:', response);
  //         this.registrationSuccess = true;
  //       },
  //       error => console.error('Error registering user:', error)
  //     );
  // }
  register(): void {
    const formData = {
      name: this.name,
      email: this.email,
      password: this.password
    };
  
    // Make sure to replace 'http://localhost:3000/api/signup' with your actual backend API endpoint
    this.http.post('http://localhost:3000/api/signup', formData)
      .subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.registrationSuccess = true;
        },
        error: (error) => {
          console.error('Error registering user:', error);
          // Log the error message received from the server
          console.error('Error message:', error.message);
          // If available, log the full error response received from the server
          if (error.error) {
            console.error('Error details:', error.error);
          }
        }
      });
  }
  
}
