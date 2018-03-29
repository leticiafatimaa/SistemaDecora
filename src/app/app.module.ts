import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

//firebase
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { RegisterComponent } from './views/register/register.component';
import { UsersComponent } from './views/users/users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AuthGuard } from './guards';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    FormRegisterComponent,
    RegisterComponent,
    UsersComponent,
    ListUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [
    AuthService,
    AngularFireAuth,
    AngularFireModule,
    AuthGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
