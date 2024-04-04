import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })


export class AppComponent {
  title = 'Learn_Angular';
}


// export class LoginComponent {

//   email: string = '';    // Declare and initialize the email property
//   password: string = ''; // Declare and initialize the password property

//   constructor() { }

//   onSubmit() {
//     // Here you can handle the form submission logic, such as sending the credentials to a backend API
//     console.log('Email:', this.email);
//     console.log('Password:', this.password);
//   }
// }

