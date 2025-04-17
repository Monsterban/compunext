import { Component } from '@angular/core';
import { Orden } from '../Orden-trabajo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'Ingreso-datos',
  templateUrl: './Ingreso-datos.Component.html',
  styleUrls: ['./Ingreso-datos.Component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule], 
})
export class Ingresodatos {
Orden:Orden  = {
  nombre: '',
  identificacion: null,
  correo: '',
  telefono: null,
};
  

  enviar(){
    console.log(this.Orden);
  }
}
