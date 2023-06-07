import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  logout()
  {
		localStorage.removeItem('user_auth_token');
		localStorage.removeItem('user_auth_id');
		localStorage.removeItem('user_id');
		localStorage.removeItem('user_firstname');
		localStorage.removeItem('user_lastname');
		localStorage.removeItem('user_email');
		localStorage.removeItem('user_phone'); 
		 this.router.navigate(['/']);
  }

}
