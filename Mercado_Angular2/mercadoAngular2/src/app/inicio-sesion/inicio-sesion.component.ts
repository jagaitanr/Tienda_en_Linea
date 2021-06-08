import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
    console.log(this.email);
    console.log(this.password);
  }

}
