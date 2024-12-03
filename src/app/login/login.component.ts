import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone:false,
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})

export class LoginComponent {
	username = '';
	password = '';
	errorMessage = '';

	constructor(private router: Router) {}

	onLogin(e: Event) {
		e.preventDefault();
		if (this.username !== '' && this.password === '111') {
			void this.router.navigate(['/main']);
		} else {
			this.errorMessage = 'Invalid username or password.';
		}
	}
}