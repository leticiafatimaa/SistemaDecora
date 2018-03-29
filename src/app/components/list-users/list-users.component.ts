import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  tokenX: string

  name: string = window.localStorage.getItem('name');
  email: string = window.localStorage.getItem('email');
  userType: string = window.localStorage.getItem('userType');

  //name of the user table
  displayedColumns = ['email', 'name', 'userType'];
  //user table data
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  //user table filter, angular material component
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor() {
    //variable tokenX receives the value saved in the localStorage,
    //which contains information of whether it is an administrator or common user.
    this.tokenX = window.localStorage.getItem('tokenX')
  }

  
}

//Data entered in user table, component of angular material
export interface Element {
  name: string;
  email: string;
  userType: string;
  
}

const ELEMENT_DATA: Element[] = [
  {email: "iisaacfernandor@desari.com.br", name: 'Isaac Fernando', userType: "Admin"},
  {email: "cceciliacarolineluciana@tia.mat.br", name: 'Cecília Caroline', userType: "User"},
  {email: "benjaminpietrodias@eternalam.com.br", name: 'Benjamin Pietro Dias', userType: "User"},
  {email: "jjessicabrunamarinacardoso@morada.com.br", name: 'Jéssica Bruna', userType: "Admin"},
  {email: "allanahadassaoliveira@wwlimpador.com.br", name: 'Allana Hadassa', userType: "User"},
  {email: "catarinaanaluaparicio@mabeitex.com.br", name: 'Catarina Analu Aparício', userType: "User"},
  {email: "enniferesterbiancadasneves@ppe.ufrj.br", name: 'Jennifer Ester', userType: "User"},
  {email: "milenaolivianogueira_@adherminer.com.br", name: 'Milena Olivia', userType: "User"},
  {email: "cauealmeida@yahool.com", name: 'Thomas Raimundo', userType: "User"},
  {email: "ricardorodrigosilva_@vizzacchi.com.br", name: 'Ricardo Rodrigo Silva', userType: "User"},
  {email: "brenobryanfrancisconovaes@desari.com.br", name: 'Breno Bryan ', userType: "User"},
  {email: "brunogabrielmariobrito@girocenter.com.br", name: 'Bruno Gabriel', userType: "User"},
  {email: "kaiqueeduardodaluz@gigaonline.com.br", name: 'Kaique Eduardo', userType: "User"},
  {email: "marcosmonteiro-92@unimedsjc.com.br", name: 'Vitor Danilo Marcos', userType: "User"},
  {email: "sebastiaobrito-80@supercarioca.com", name: 'Pedro Henrique', userType: "User"},
  {email: "antoniamarleneoliviasilva_@cfaraujo.eng.br", name: 'Antônia Marlene ', userType: "User"},
  {email: "ssophiaantoniarodrigues@trt15.jus.br", name: 'Sophia Antônia ', userType: "User"},
  {email: "claricenovaes-78@poligerma.com.br", name: 'Adriana Clarice Novaes', userType: "User"},
];