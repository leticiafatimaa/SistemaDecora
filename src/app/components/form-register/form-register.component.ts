import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user/user.module';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
    //creates a user object
    this.user = new User;
  }

  register(user: User) {
    //saves the information in the localStorage
    window.localStorage.setItem('name', user.name);
    window.localStorage.setItem('email', user.email);
    window.localStorage.setItem('password', user.password);

    //condition to get the correct value from select
    if (user.userType == "User") {
      user.userType = "User"
    } else if (user.userType == "Admin") {
      user.userType = "Admin"
    }

    //save the information in the localStorage
    window.localStorage.setItem('userType', user.userType);
  }

}
