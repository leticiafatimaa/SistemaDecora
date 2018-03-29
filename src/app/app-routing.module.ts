import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UsersComponent } from './views/users/users.component';
import { AuthGuard } from "./guards";

const routes: Routes = [

  {path: 'users', redirectTo: 'UsersComponent', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard] },

  {path: 'register', redirectTo: 'RegisterComponent', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },



  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
