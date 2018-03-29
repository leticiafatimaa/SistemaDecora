import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { 
    this.user = afAuth.authState;
  }

  isLoggedIn() {
    return this.user.map(user => Boolean(user));
  }

  public login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
        localStorage['token'] = user;
        this.router.navigate(['/users']);
      })
        .catch((error) => {
          this.router.navigate(['/login']);
        });
    })
      .catch((error) => {
        this.router.navigate(['/login']);
      });
  }

}
