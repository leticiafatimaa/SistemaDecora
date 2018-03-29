import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  constructor(private auth: AuthService, private router: Router) {
  }

  //Function to log into the system
  logOn(email, password) {
    //condition to know if the user is an administrator
    if (email == "admin@sistema.com"){
      //adds the admin value to the token to enable the user registration button
      window.localStorage.setItem('tokenX', 'admin');
      //redirects users screen
      this.router.navigate(['/users']);
      //logs in to firebase
      this.auth.login(email, password);

       //condition to know if the user is an common
    } else if (email == "user@sistema.com") {
      //adds the user value to the token to disable the user's registration button
      window.localStorage.setItem('tokenX', 'user');
      //redirects users screen
      this.router.navigate(['/users']);
      //logs in to firebase
      this.auth.login(email, password);
    }
  }






}
