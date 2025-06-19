/* ============================================================================
LOGIN.COMPONENT.TS
============================================================================
This TypeScript file contains the logic for the login component. It defines
the component's selector, template, and styles. This is where you would
add properties for data binding and methods to handle user interactions,
such as submitting the login form.
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private router: Router) {}

  onLogin() {
    // Add your authentication logic here
    this.router.navigate(['/dashboard']);
  }
}